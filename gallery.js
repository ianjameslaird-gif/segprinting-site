(function(){var as=[].slice.call(document.querySelectorAll('#gallery .gi'));if(!as.length)return;
var lb=document.getElementById('lb'),im=lb.querySelector('img'),cap=lb.querySelector('figcaption'),i=0,last=null;
function show(n){i=(n+as.length)%as.length;var s=as[i].querySelector('img');im.src=as[i].getAttribute('href');im.alt=s.alt;cap.textContent=s.alt+' ('+(i+1)+'/'+as.length+')'}
function open(n){last=document.activeElement;show(n);lb.hidden=false;document.documentElement.classList.add('lb-open');requestAnimationFrame(function(){lb.classList.add('show')});lb.querySelector('.lb-x').focus()}
function close(){lb.classList.remove('show');document.documentElement.classList.remove('lb-open');setTimeout(function(){lb.hidden=true;im.removeAttribute('src')},250);if(last)last.focus()}
as.forEach(function(a,n){a.addEventListener('click',function(e){e.preventDefault();open(n)})});
lb.querySelector('.lb-x').onclick=close;lb.querySelector('.lb-p').onclick=function(e){e.stopPropagation();show(i-1)};lb.querySelector('.lb-n').onclick=function(e){e.stopPropagation();show(i+1)};
lb.addEventListener('click',function(e){if(e.target===lb||e.target.tagName==='FIGURE')close()});
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(i-1);else if(e.key==='ArrowRight')show(i+1)});
var sx=null,sy=0;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
lb.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))show(dx<0?i+1:i-1);else if(dy>80)close();sx=null},{passive:true});
/* reveal, with guaranteed fallback */
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!RM&&'IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -30px 0px'});
as.forEach(function(a,n){a.style.transitionDelay=(n%4)*70+'ms';a.classList.add('gr');io.observe(a)});
setTimeout(function(){as.forEach(function(a){a.classList.add('in')})},6000)}})();
