(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,mob=matchMedia('(max-width:820px)').matches;
let si=0;document.querySelectorAll('.split').forEach(el=>{const t=el.textContent;el.setAttribute('aria-label',t);el.textContent='';t.split(' ').forEach((wd,wi)=>{if(wi)el.appendChild(document.createTextNode(' '));const w=document.createElement('span');w.className='wd';w.setAttribute('aria-hidden','true');if(el.classList.contains('shimmer')){w.className='wd ch';w.textContent=wd;w.style.setProperty('--i',si+=3)}else[...wd].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.setProperty('--i',++si);w.appendChild(s)});el.appendChild(w)})});
const hero=document.querySelector('.cine'),cv=hero&&hero.querySelector('.aurora');
if(cv){const x=cv.getContext('2d');let w,h,raf,t=0,run=true;const sc=mob?.35:.5;
const cols=[[255,45,138],[255,122,0],[0,194,255],[160,60,255],[255,45,138]];
const size=()=>{w=cv.width=Math.round(hero.clientWidth*sc);h=cv.height=Math.round(hero.clientHeight*sc)};size();addEventListener('resize',size);
const draw=()=>{x.globalCompositeOperation='source-over';x.fillStyle='#0b0716';x.fillRect(0,0,w,h);x.globalCompositeOperation='lighter';
const n=mob?3:cols.length;for(let k=0;k<n;k++){const [r,g,b]=cols[k];const ph=t*(.25+k*.07)+k*1.7;
x.beginPath();const yb=h*(.25+k*.14);x.moveTo(0,h);for(let px=0;px<=w;px+=w/24){const y=yb+Math.sin(px/w*3+ph)*h*.12+Math.sin(px/w*7-ph*1.3)*h*.05;x.lineTo(px,y)}x.lineTo(w,h);x.closePath();
const gr=x.createLinearGradient(0,yb-h*.2,0,h);gr.addColorStop(0,`rgba(${r},${g},${b},0)`);gr.addColorStop(.25,`rgba(${r},${g},${b},.55)`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);x.fillStyle=gr;x.fill();
const bx=w*(.5+.4*Math.sin(ph*.8)),by=h*(.4+.3*Math.cos(ph*.6)),rg=x.createRadialGradient(bx,by,0,bx,by,w*.25);rg.addColorStop(0,`rgba(${r},${g},${b},.35)`);rg.addColorStop(1,`rgba(${r},${g},${b},0)`);x.fillStyle=rg;x.fillRect(0,0,w,h)}};
const loop=()=>{t+=.016;draw();if(run)raf=requestAnimationFrame(loop)};
if(RM){t=3;draw()}else{loop();
document.addEventListener('visibilitychange',()=>{run=!document.hidden;document.body.classList.toggle('paused',document.hidden);if(run)loop();else cancelAnimationFrame(raf)});
new IntersectionObserver(e=>{const v=e[0].isIntersecting;if(v&&!run&&!document.hidden){run=true;loop()}else if(!v){run=false;cancelAnimationFrame(raf)}}).observe(hero)}}
const cards=[...document.querySelectorAll('.glass')];if(!RM&&cards.length){cards[0].classList.add('float1');cards[1]&&cards[1].classList.add('float2');let mx=0,my=0,sy=0,tk=0;
const ap=()=>{tk=0;cards.forEach(c=>{const d=+c.dataset.depth;c.style.transform=`translate3d(${mx*d}px,${my*d+sy*d*.02}px,0) rotateY(${mx*8}deg) rotateX(${-my*8}deg)`})};
const q=()=>{if(!tk)tk=requestAnimationFrame(ap)};
if(!mob)hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;q()});
addEventListener('scroll',()=>{sy=Math.min(scrollY,900);q()},{passive:true})}
const els=document.querySelectorAll('main section:not(.cine), .offer');if(!RM&&'IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});els.forEach(s=>{if(s.getBoundingClientRect().top>innerHeight){s.classList.add('rv');io.observe(s)}})}
})();
(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const go=()=>document.querySelectorAll('.glass[data-slides]').forEach((g,gi)=>{const L=g.dataset.slides.split('|').map(x=>x.split('::'));
const base=g.querySelector('img');L.unshift([base.getAttribute('src'),base.alt]);
const mk=()=>{const i=new Image();i.className='sl';i.width=691;i.height=900;i.decoding='async';i.setAttribute('aria-hidden','true');g.appendChild(i);return i};
L.slice(1).forEach(([s])=>{new Image().src=s});const ly=[mk(),mk()];let k=0,c=0;
const step=()=>{if(document.hidden)return;k=(k+1)%L.length;const n=ly[c];c^=1;const o=ly[c];
n.src=L[k][0];n.alt=L[k][1];n.classList.remove('kb');void n.offsetWidth;n.classList.add('on','kb');o.classList.remove('on')};
window.__heroStep=window.__heroStep||[];window.__heroStep.push(step);
setTimeout(()=>{step();setInterval(step,5000)},5000+gi*2500)});
document.readyState==='complete'?go():addEventListener('load',go)})();
