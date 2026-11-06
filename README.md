
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>O início de uma história ❤️</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  --fundo:#090f20;
  --dourado:#e9c98e;
  --vermelho:#ed5266;
  --azul:#8eb9ff;
}
* { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body {
  margin:0;
  background:var(--fundo);
  color:#f7f1e9;
  font-family:'DM Sans',sans-serif;
  line-height:1.7;
}
body::before {
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  background-image:radial-gradient(#ffffff55 1px,transparent 1px);
  background-size:65px 65px;
  opacity:.2;
}
section {
  padding:90px 20px;
  max-width:1000px;
  margin:auto;
  text-align:center;
  position:relative;
}
h1,h2,h3 {
  font-family:'Playfair Display',serif;
  font-weight:400;
}
h1 {
  font-size:clamp(45px,8vw,90px);
  line-height:1.15;
  margin:15px 0;
}
h2 { font-size:clamp(32px,5vw,52px); }
p { color:#d6d5df; }
.dourado { color:var(--dourado); }
.vermelho { color:var(--vermelho); }
.pequeno {
  text-transform:uppercase;
  letter-spacing:3px;
  font-size:12px;
  color:var(--dourado);
}
.hero {
  min-height:90vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.subtitulo {
  font-size:19px;
  max-width:600px;
  margin:25px auto;
}
.fio {
  height:3px;
  max-width:650px;
  margin:45px auto;
  background:linear-gradient(90deg,transparent,#f14662,#ffb0bd,#f14662,transparent);
  box-shadow:0 0 25px #ef405a;
  border-radius:100%;
  animation:pulsar 3s infinite;
}
@keyframes pulsar {
  50% { opacity:.45; transform:scaleX(.9); }
}
.infinito {
  font-size:110px;
  line-height:1;
  color:var(--vermelho);
  text-shadow:0 0 35px #ed526688;
  animation:flutuar 4s ease-in-out infinite;
}
@keyframes flutuar {
  50% { transform:translateY(-12px) scale(1.07); }
}
.contador {
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
  margin:35px 0;
}
.tempo {
  background:#ffffff0b;
  border:1px solid #ffffff25;
  border-radius:16px;
  padding:20px 15px;
  min-width:90px;
}
.numero {
  font-size:clamp(28px,5vw,46px);
  color:var(--dourado);
  font-weight:700;
}
.rotulo {
  font-size:11px;
  letter-spacing:2px;
  text-transform:uppercase;
}
.card {
  background:linear-gradient(135deg,#18223b,#10182c);
  border:1px solid #ffffff20;
  border-radius:24px;
  padding:35px;
  margin:25px auto;
  max-width:750px;
}
.maos {
  font-size:65px;
  letter-spacing:20px;
  color:var(--vermelho);
}
.citacao {
  font-family:'Playfair Display',serif;
  font-size:clamp(23px,4vw,35px);
  font-style:italic;
  color:var(--dourado);
}
.semente {
  font-size:75px;
  display:block;
  animation:flutuar 4s infinite;
}
.caderno {
  background:#f7edda;
  color:#43362f;
  border-radius:12px;
  padding:35px 25px;
  max-width:680px;
  margin:30px auto;
  min-height:420px;
  box-shadow:12px 12px 0 #b99d7544;
  text-align:left;
}
.caderno h3 { font-size:27px; }
.caderno p {
  color:#55483f;
  white-space:pre-line;
}
.autor {
  color:#a15c59;
  font-size:13px;
  letter-spacing:1px;
}
.controles {
  display:flex;
  gap:12px;
  justify-content:center;
  flex-wrap:wrap;
}
button {
  background:transparent;
  border:1px solid var(--dourado);
  color:var(--dourado);
  border-radius:30px;
  padding:12px 20px;
  font-size:15px;
  cursor:pointer;
}
button:hover {
  background:var(--dourado);
  color:#111827;
}
footer {
  text-align:center;
  padding:50px 20px;
  color:#b4b2c0;
}
@media(max-width:500px) {
  section { padding:65px 16px; }
  .tempo { min-width:70px; padding:12px 9px; }
  .card { padding:25px 18px; }
}
</style>
</head>
<body>

<section class="hero" id="inicio">
  <div class="pequeno">Marcelo & Catarina</div>
  <h1>O início de <span class="dourado">uma história.</span></h1>
  <p class="subtitulo">
    Duas pessoas. Dois caminhos.
    Uma conversa que mudou tanta coisa.
  </p>
  <div class="fio"></div>
  <p class="citacao">
    "Eu já te amava antes de te conhecer."
  </p>
  <p>Role para descobrir nossos capítulos ↓</p>
</section>

<section id="tempo">
  <div class="pequeno">24 de agosto de 2026 · 10h22</div>
  <h2>O tempo desde então</h2>
  <div class="infinito">∞</div>
  <p>Uma história que continua sendo escrita.</p>

  <div class="contador">
    <div class="tempo">
      <div class="numero" id="dias">0</div>
      <div class="rotulo">Dias</div>
    </div>
    <div class="tempo">
      <div class="numero" id="horas">00</div>
      <div class="rotulo">Horas</div>
    </div>
    <div class="tempo">
      <div class="numero" id="minutos">00</div>
      <div class="rotulo">Minutos</div>
    </div>
    <div class="tempo">
      <div class="numero" id="segundos">00</div>
      <div class="rotulo">Segundos</div>
    </div>
  </div>

  <p>Desde a conversa que deu início a tudo.</p>
</section>

<section id="fio">
  <div class="pequeno">A teoria do fio vermelho</div>
  <h2>Talvez já estivéssemos conectados.</h2>
  <div class="card">
    <div class="maos">☞ ─── ☜</div>
    <div class="fio"></div>
    <p>
      Diz uma antiga lenda que um fio vermelho
      conecta pessoas destinadas a se encontrar.
    </p>
    <p>
      Talvez nossos caminhos tenham se cruzado
      muito antes de nossos corações perceberem.
    </p>
    <p class="citacao">
      Não foi apenas um encontro.
      Talvez tenha sido um reencontro.
    </p>
  </div>
</section>

<section>
  <div class="pequeno">Os pequenos símbolos</div>
  <h2>Coisas que contam nossa história</h2>

  <div class="card">
    <h3>🧵 O fio invisível</h3>
    <p>
      O colar vermelho e a pulseira que lembram
      uma conexão que não precisa ser vista
      para ter significado.
    </p>
  </div>

  <div class="card">
    <h3>🏎️ Sally & Relâmpago McQueen</h3>
    <p>
      Duas camisetas, duas personalidades
      e uma brincadeira que se tornou lembrança.
    </p>
  </div>

  <div class="card">
    <h3>사랑해요</h3>
    <p>
      Saranghaeyo.
      Uma das nossas maneiras de dizer
      "eu te amo".
    </p>
  </div>

  <div class="card">
    <h3>🎵 Nossa música</h3>
    <p>
      "Ainda Bem", de Marisa Monte.
      Uma música que ganhou um significado especial.
    </p>
  </div>
</section>

<section id="extraordinario">
  <div class="pequeno">Uma semente</div>
  <h2>O extraordinário começa pequeno.</h2>
  <span class="semente" id="planta">🌱</span>
  <p>
    Algumas histórias começam como sementes:
    discretas, pequenas e cheias de possibilidades.
  </p>
  <p class="citacao">
    "Eu queria viver o extraordinário com você."
  </p>
  <button onclick="florescer()">Fazer nossa semente florescer</button>
</section>

<section id="cartas">
  <div class="pequeno">As palavras que ficaram</div>
  <h2>Nosso caderno de cartas</h2>
  <p>
    Cartas de Catarina para Marcelo.
    Cartas de Marcelo para Catarina.
    Duas formas de contar uma mesma história.
  </p>

  <div class="caderno" id="caderno">
    <div class="autor" id="autorCarta"></div>
    <h3 id="tituloCarta"></h3>
    <p id="textoCarta"></p>
  </div>

  <div class="controles">
    <button onclick="anterior()">← Anterior</button>
    <button onclick="alternarPausa()" id="pausa">Pausar</button>
    <button onclick="proxima()">Próxima →</button>
  </div>

  <p id="indicador"></p>
</section>

<section>
  <div class="pequeno">Ainda existem páginas em branco</div>
  <h2>O que vem depois?</h2>
  <p class="citacao">
    Algumas histórias terminam com um ponto-final.
    A nossa continua sendo escrita.
  </p>
  <div class="fio"></div>
  <p>Que venham os próximos capítulos.</p>
</section>

<footer>
  Feito com carinho por Marcelo ❤️<br>
  Para Catarina · O início de uma história
</footer>

<script>
// DATA EXATA DO INÍCIO DA HISTÓRIA
const inicio = new Date("2026-08-24T10:22:00-03:00");

function atualizarContador() {
  const diferenca = Math.max(0, Date.now() - inicio.getTime());
  const total = Math.floor(diferenca / 1000);

  const dias = Math.floor(total / 86400);
  const horas = Math.floor((total % 86400) / 3600);
  const minutos = Math.floor((total % 3600) / 60);
  const segundos = total % 60;

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = String(horas).padStart(2,"0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2,"0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2,"0");
}
atualizarContador();
setInterval(atualizarContador,1000);

// ANIMAÇÃO DA SEMENTE
let etapaPlanta = 0;
function florescer() {
  const etapas = ["🌱","🌿","🌷","🌸"];
  etapaPlanta = (etapaPlanta + 1) % etapas.length;
  document.getElementById("planta").textContent = etapas[etapaPlanta];
}

// CARTAS: VOCÊ PODE ADICIONAR MAIS AQUI
const cartas = [
  {
    autor:"De Catarina para Marcelo",
    titulo:"Aqui escrevo toda a minha intensidade",
    texto:`Aqui escrevo toda a minha intensidade,
para você não achar que eu sou louca.

Dia 15/08 começamos a conversar.

Tudo começou com um pedido de desculpas...

[Substitua este trecho pelo restante da carta original.]`
  },
  {
    autor:"De Marcelo para Catarina",
    titulo:"Eu te amava antes de te conhecer",
    texto:`Catarina,

Aqui vai a primeira vez que escrevo para você.

Você chegou tão inesperadamente na minha vida...

[Substitua este trecho pelo restante da carta original.]`
  },
  {
    autor:"De Catarina para Marcelo",
    titulo:"O que eu ainda não sei nomear",
    texto:`Eu não sei o que estou sentindo.

E talvez essa seja
a única coisa que eu saiba dizer
com toda a certeza.

[Substitua este trecho pelo restante da carta original.]`
  },
  {
    autor:"De Marcelo para Catarina",
    titulo:"O amor",
    texto:`Eu sinto que estou conhecendo pela primeira vez
o que é o amor.

Porque antes de virar amor,
ele é respeito.
É segurança.
É cuidado.

[Substitua este trecho pelo restante do poema original.]`
  }
];

let cartaAtual = 0;
let pausado = false;

function mostrarCarta() {
  const carta = cartas[cartaAtual];
  document.getElementById("autorCarta").textContent = carta.autor;
  document.getElementById("tituloCarta").textContent = carta.titulo;
  document.getElementById("textoCarta").textContent = carta.texto;
  document.getElementById("indicador").textContent =
    `Carta ${cartaAtual + 1} de ${cartas.length}`;
}

function proxima() {
  cartaAtual = (cartaAtual + 1) % cartas.length;
  mostrarCarta();
}

function anterior() {
  cartaAtual = (cartaAtual - 1 + cartas.length) % cartas.length;
  mostrarCarta();
}

function alternarPausa() {
  pausado = !pausado;
  document.getElementById("pausa").textContent =
    pausado ? "Continuar" : "Pausar";
}

setInterval(() => {
  if (!pausado) proxima();
},30000);

// DESLIZAR NO CELULAR
let toqueInicial = 0;
const caderno = document.getElementById("caderno");

caderno.addEventListener("touchstart", e => {
  toqueInicial = e.changedTouches[0].screenX;
},{passive:true});

caderno.addEventListener("touchend", e => {
  const diferenca = e.changedTouches[0].screenX - toqueInicial;
  if (diferenca < -60) proxima();
  if (diferenca > 60) anterior();
},{passive:true});

mostrarCarta();
</script>
</body>
</html>
