"use strict";
(() => {
  const conf = window.CONFIG || {};
  const inicio = new Date(conf.inicio || '2026-08-24T10:22:00-03:00').getTime();
  const $ = id => document.getElementById(id);
  const two = n => String(n).padStart(2, '0');
  const tempo = {anos: $('anos'), meses: $('meses'), semanas: $('semanas'), dias: $('dias'), horas: $('horas'), minutos: $('minutos'), segundos: $('segundos')};
  $('data-principal').textContent = conf.dataExibida || '24 AGOSTO 2026 • 10:22 • BRASÍLIA';
  function atualizarContador() {
    let secs = Math.max(0, Math.floor((Date.now() - inicio) / 1000));
    const d = Math.floor(secs / 86400); secs %= 86400;
    const agora = new Date();
    const inicioData = new Date(inicio);
    // Anos e meses completos de calendário, calculados no fuso de Brasília.
    const fmt = new Intl.DateTimeFormat('en-US', {timeZone:'America/Sao_Paulo', year:'numeric', month:'numeric', day:'numeric'});
    const partes = data => Object.fromEntries(fmt.formatToParts(data).filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)]));
    const a = partes(agora), b = partes(inicioData);
    let mesesCompletos = (a.year-b.year)*12 + a.month-b.month;
    if (a.day < b.day || (a.day === b.day && (agora.getTime()-new Date(`${a.year}-${String(a.month).padStart(2,'0')}-${String(a.day).padStart(2,'0')}T10:22:00-03:00`).getTime()) < 0)) mesesCompletos--;
    mesesCompletos = Math.max(0,mesesCompletos);
    tempo.anos.textContent = two(Math.floor(mesesCompletos / 12));
    tempo.meses.textContent = two(mesesCompletos % 12);
    tempo.semanas.textContent = String(Math.floor(d / 7)).padStart(2,'0');
    tempo.dias.textContent = String(d).padStart(3, '0');
    tempo.horas.textContent = two(Math.floor(secs / 3600)); secs %= 3600;
    tempo.minutos.textContent = two(Math.floor(secs / 60));
    tempo.segundos.textContent = two(secs % 60);
  }
  atualizarContador();
  setInterval(atualizarContador, 1000);

  // CONFIGURAÇÃO DA MÚSICA - somente link oficial, sem tocar automaticamente.
  const nomeMusica = $('musica-nome');
  const botaoMusica = $('musica-link');
  nomeMusica.textContent = conf.musicaNome || 'Nossa música — Marisa Monte';
  if (conf.musicaUrl && /^https:\/\//i.test(conf.musicaUrl)) {
    botaoMusica.href = conf.musicaUrl;
    botaoMusica.target = '_blank';
    botaoMusica.rel = 'noopener noreferrer';
    botaoMusica.textContent = 'Ouvir nossa música ↗';
  } else {
    botaoMusica.href = '#cartas';
    botaoMusica.textContent = 'Enquanto isso, nossas cartas ↓';
  }

  const cartas = (window.CARTAS || []).slice().sort((a,b) => (a.ordem || 0) - (b.ordem || 0));
  const textoEl = $('carta-texto'), papel = $('papel'), dataEl = $('carta-data');
  const autorEl = $('carta-autor'), tituloEl = $('carta-titulo'), paginaEl = $('pagina-atual');
  const pausarBtn = $('pausar'), fill = $('progresso-carta'), totalEl = $('quantidade-cartas');
  const durata = Math.max(5000, Number(conf.intervaloCarta) || 30000);
  let filtro = 'todos', selecionadas = cartas, indice = 0, pausado = false, lendo = false;
  let inicioCiclo = performance.now(), acumulado = 0, animacao = null;
  totalEl.textContent = cartas.length;
  const formatarData = data => data ? new Intl.DateTimeFormat('pt-BR', { day:'numeric', month:'long', year:'numeric', timeZone:'UTC' }).format(new Date(`${data}T12:00:00Z`)) : 'Data não informada';

  function atualizarCarta() {
    const carta = selecionadas[indice];
    if (!carta) {
      autorEl.textContent = 'Nosso caderno'; tituloEl.textContent = 'Novas páginas em breve';
      dataEl.textContent = '—'; textoEl.textContent = 'Ainda não há cartas nesse filtro.';
      paginaEl.textContent = '00 / 00'; return;
    }
    dataEl.textContent = carta.dataExibida || formatarData(carta.data);
    autorEl.textContent = `De ${carta.autor} para ${carta.autor === 'Marcelo' ? 'Catarina' : 'Marcelo'}`;
    tituloEl.textContent = carta.titulo;
    // textContent protege o site e preserva as quebras de linha originais.
    textoEl.textContent = carta.texto.trim();
    textoEl.scrollTop = 0;
    papel.classList.remove('turn-page');
    void papel.offsetWidth;
    papel.classList.add('turn-page');
    paginaEl.textContent = `${two(indice + 1)} / ${two(selecionadas.length)}`;
    inicioCiclo = performance.now(); acumulado = 0; fill.style.width = '0%';
  }

  function mudar(n) {
    if (!selecionadas.length) return;
    indice = (indice + n + selecionadas.length) % selecionadas.length;
    atualizarCarta();
  }
  $('anterior').addEventListener('click', () => mudar(-1));
  $('proximo').addEventListener('click', () => mudar(1));
  document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
    filtro = btn.dataset.filter;
    document.querySelectorAll('.tab').forEach(b => {const ativo = b === btn; b.classList.toggle('active',ativo); b.setAttribute('aria-pressed',String(ativo));});
    selecionadas = cartas.filter(c => filtro === 'todos' || c.autor === filtro);
    indice = 0; atualizarCarta();
  }));
  function definirPausa(estado) {
    pausado = estado;
    pausarBtn.textContent = pausado ? '▶ Continuar passagem automática' : 'Ⅱ Pausar passagem automática';
    pausarBtn.setAttribute('aria-pressed', String(pausado));
    if (!pausado) { lendo = false; inicioCiclo = performance.now(); }
  }
  pausarBtn.addEventListener('click', () => definirPausa(!pausado));
  function pausarAoLer() { if (!lendo) { acumulado += performance.now() - inicioCiclo; lendo = true; } }
  function continuarAoLer() { if (lendo) { lendo = false; inicioCiclo = performance.now(); } }
  textoEl.addEventListener('mouseenter', pausarAoLer);
  textoEl.addEventListener('mouseleave', continuarAoLer);
  textoEl.addEventListener('focusin', pausarAoLer);
  textoEl.addEventListener('focusout', continuarAoLer);
  textoEl.addEventListener('scroll', pausarAoLer, {passive:true});
  // Para leitores no celular, tocar no texto pausa automaticamente.
  textoEl.addEventListener('touchstart', () => definirPausa(true), {passive:true});
  // A pessoa pode retomar pelo botão ao terminar de ler.
  function loop(now) {
    if (!pausado && !lendo && selecionadas.length > 1 && !document.hidden) {
      const decorrido = acumulado + now - inicioCiclo;
      fill.style.width = Math.min(100, (decorrido / durata)*100) + '%';
      if (decorrido >= durata) mudar(1);
    }
    animacao = requestAnimationFrame(loop);
  }
  atualizarCarta(); animacao = requestAnimationFrame(loop);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) inicioCiclo = performance.now(); });
  let startX = 0, startY = 0;
  papel.addEventListener('touchstart', e => { if (e.touches[0]) { startX=e.touches[0].clientX; startY=e.touches[0].clientY; } }, {passive:true});
  papel.addEventListener('touchend', e => {
    const t = e.changedTouches[0]; if (!t) return;
    const dx=t.clientX-startX, dy=t.clientY-startY;
    if (Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.45) mudar(dx<0?1:-1);
  }, {passive:true});
  papel.addEventListener('keydown', e => { if (e.key==='ArrowRight') { mudar(1); e.preventDefault(); } if (e.key==='ArrowLeft') { mudar(-1); e.preventDefault(); }});

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {if(entry.isIntersecting) {entry.target.classList.add('visible'); if (entry.target.classList.contains('seed-section')) entry.target.classList.add('germinated'); observer.unobserve(entry.target);}});
  }, {threshold:.15});
  document.querySelectorAll('.reveal').forEach(x => observer.observe(x));
})();
