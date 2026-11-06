// CONFIGURAÇÃO DO CONTADOR: 24/08/2026, 10h22, horário de Brasília
const START = new Date('2026-08-24T10:22:00-03:00').getTime();
const INTERVALO_CARTAS = 30000; // 30 segundos
const $ = id => document.getElementById(id);
function updateCounter(){
  const now=new Date();
  const origin=new Date(START);
  const elapsed=Math.max(0,now.getTime()-START);
  const total=Math.floor(elapsed/1000);
  // Anos e meses completos no calendário de Brasília, sem contar períodos parciais.
  const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(now);
  const value=k=>Number(parts.find(x=>x.type===k).value);
  let years=value('year')-2026;
  let months=value('month')-8;
  let days=value('day')-24;
  if(days<0){months--;const prevMonthDays=new Date(Date.UTC(value('year'),value('month')-1,0)).getUTCDate();days+=prevMonthDays;}
  if(months<0){years--;months+=12;}
  if(elapsed===0){years=0;months=0;}
  const weeks=Math.floor(total/604800);
  $('years').textContent=Math.max(0,years);
  $('months').textContent=Math.max(0,months);
  $('weeks').textContent=weeks;
  $('days').textContent=Math.floor(total/86400);
  $('hours').textContent=String(Math.floor(total%86400/3600)).padStart(2,'0');
  $('minutes').textContent=String(Math.floor(total%3600/60)).padStart(2,'0');
  $('seconds').textContent=String(total%60).padStart(2,'0');
}
updateCounter();setInterval(updateCounter,1000);
// O símbolo do infinito se transforma em coração usando dois traçados vetoriais.
const inf='M170 84 C120 8 30 25 30 84 C30 145 118 151 170 84 C222 17 310 24 310 84 C310 144 220 151 170 84';
const heart='M170 145 C140 120 30 75 30 47 C30 -12 126 -2 170 57 C214 -2 310 -12 310 47 C310 75 200 120 170 145';
const morph=$('morph-path');if(morph&&typeof morph.animate==='function'){let on=false;setInterval(()=>{const a=on?heart:inf,b=on?inf:heart;try{morph.animate([{d:`path("${a}")`},{d:`path("${b}")`}],{duration:1900,fill:'forwards',easing:'ease-in-out'});setTimeout(()=>morph.setAttribute('d',b),1900)}catch(e){morph.setAttribute('d',b)}on=!on},3400)}
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const plantObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('grown');plantObserver.unobserve(e.target)}}),{threshold:.3});plantObserver.observe($('plantStage'));
window.addEventListener('scroll',()=>{const d=document.documentElement;const max=d.scrollHeight-innerHeight;$('progress').style.width=(max>0?scrollY/max*100:0)+'%'},{passive:true});
// CARTAS: para adicionar uma nova, edite somente cartas.js
let filter='todos',current=0,paused=false,lastInteraction=Date.now(),visible=[];
function updateVisible(){visible=window.CARTAS.filter(c=>filter==='todos'||c.autor===filter).sort((a,b)=>a.data.localeCompare(b.data)||a.ordem-b.ordem);current=0;render()}
function render(){if(!visible.length)return;const c=visible[current];$('letterDate').textContent=c.dataExibicao||c.data;$('letterIndex').textContent=`${current+1} / ${visible.length}`;$('letterAuthor').textContent=`De ${c.autor} para ${c.autor==='Marcelo'?'Catarina':'Marcelo'}`;$('letterTitle').textContent=c.titulo;$('letterContent').textContent=c.texto;$('letterContent').scrollTop=0;const paper=$('paper');paper.classList.remove('turn');void paper.offsetWidth;paper.classList.add('turn')}
function navigate(n){if(!visible.length)return;current=(current+n+visible.length)%visible.length;lastInteraction=Date.now();render()}
$('prevLetter').addEventListener('click',()=>navigate(-1));$('nextLetter').addEventListener('click',()=>navigate(1));$('pauseLetter').addEventListener('click',()=>{paused=!paused;$('pauseLetter').textContent=paused?'▶ CONTINUAR':'Ⅱ PAUSAR';lastInteraction=Date.now()});
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;lastInteraction=Date.now();updateVisible()}));
let startX=0;$('paper').addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;lastInteraction=Date.now()},{passive:true});$('paper').addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-startX;if(Math.abs(delta)>65)navigate(delta<0?1:-1);lastInteraction=Date.now()},{passive:true});$('paper').addEventListener('wheel',()=>{lastInteraction=Date.now()},{passive:true});$('paper').addEventListener('pointerdown',()=>{lastInteraction=Date.now()});
setInterval(()=>{if(!paused&&Date.now()-lastInteraction>INTERVALO_CARTAS){navigate(1)}},1000);updateVisible();
