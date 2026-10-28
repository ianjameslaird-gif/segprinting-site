(function(){var C=window.CHAT_CFG;var s=document.createElement('div');s.id='cb';
s.innerHTML='<button id="cb-btn" aria-label="Open chat">💬</button><div id="cb-panel" role="dialog" aria-label="Chat" hidden><div id="cb-head"><b>'+C.title+'</b><button id="cb-x" aria-label="Close">×</button></div><div id="cb-log"></div><div id="cb-q"></div><form id="cb-f"><input id="cb-i" placeholder="Type a question…" autocomplete="off"><button>Send</button></form></div>';
document.body.appendChild(s);var P=s.querySelector('#cb-panel'),L=s.querySelector('#cb-log'),Q=s.querySelector('#cb-q'),started=0;
function msg(t,who,h){var d=document.createElement('div');d.className='cb-m cb-'+who;if(h)d.innerHTML=t;else d.textContent=t;L.appendChild(d);L.scrollTop=L.scrollHeight}
function hand(){return '<a class="cb-h" href="'+C.handoff.href+'" target="_blank" rel="noopener">'+C.handoff.label+'</a>'+(C.handoff2?' <a class="cb-h cb-h2" href="'+C.handoff2.href+'" target="_blank" rel="noopener">'+C.handoff2.label+'</a>':'')}
function bot(t){msg(t+'<div class="cb-ha">'+hand()+'</div>','bot',1)}
function esc(t){return t.replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
function answer(i){bot(C.faq[i].a)}
C.faq.forEach(function(f,i){var b=document.createElement('button');b.type='button';b.textContent=f.q;b.onclick=function(){msg(f.q,'me');answer(i)};Q.appendChild(b)});
function open(o){P.hidden=!o;s.classList.toggle('open',o);if(o&&!started){started=1;bot(C.greet)}}
s.querySelector('#cb-btn').onclick=function(){open(P.hidden)};s.querySelector('#cb-x').onclick=function(){open(false)};
s.querySelector('#cb-f').onsubmit=function(e){e.preventDefault();var v=s.querySelector('#cb-i').value.trim();if(!v)return;s.querySelector('#cb-i').value='';msg(v,'me');var t=v.toLowerCase();
for(var i=0;i<C.faq.length;i++){if(C.faq[i].k.some(function(k){return t.indexOf(k)>-1})){answer(i);return}}bot(C.fallback)};
if(location.hash==='#chat')open(true);})();
