# O início de uma história — Marcelo & Catarina

Site estático editável, feito com HTML, CSS e JavaScript puro. Sem mensalidades, servidor, build ou programas extras.

## 1. O que há aqui

- `index.html` — todas as seções do site, seus títulos e textos curtos.
- `styles.css` — visual, cores, adaptações para celular e animações.
- `script.js` — contador, navegação das cartas, filtros, pause, swipe, nascimento da planta.
- `cartas.js` — **as 13 cartas e poesias completas**; este é o arquivo para adicionar textos novos.
- `config.js` — data do contador, intervalo do caderno e link de música.
- `maos-fio-vermelho.webp` — ilustração do fio vermelho usada na abertura.
- `.nojekyll` — indica que o site já contém os arquivos estáticos prontos.

## 2. Como publicar no GitHub sem programar

1. Entre em https://github.com e acesse sua conta.
2. Clique em `+` (canto superior direito) > `New repository`.
3. Dê o nome `inicio-de-uma-historia`, marque `Public` para uso no GitHub Free e clique em `Create repository`.
4. No repositório, escolha `uploading an existing file` ou `Add file` > `Upload files`.
5. **Extraia o ZIP primeiro** e envie os arquivos de dentro da pasta, NÃO o arquivo .zip sozinho. Envie tudo, inclusive `maos-fio-vermelho.webp`. Todos os arquivos ficam **na raiz** do repositório.
6. Clique em `Commit changes`.
7. Vá em `Settings` > `Pages` (menu lateral). Na seção `Build and deployment`, em `Source`, escolha `Deploy from a branch`.
8. Escolha `main` e `/(root)` e clique `Save`.
9. Quando o GitHub concluir a publicação, a URL será parecida com `https://SEU-USUARIO.github.io/inicio-de-uma-historia/`.

Você também pode enviar a pasta pelo GitHub Desktop se achar mais fácil. O site é todo estático, então não requer terminal nem instalar dependências.

## 3. Adicionar mais cartas

1. Abra o repositório e clique em `cartas.js`.
2. Clique no ícone do lápis (`Edit this file`).
3. Perto do fim do arquivo, antes de `];`, insira um novo bloco como este:

```js
  ,{
    ordem: 14,
    autor: "Marcelo",
    data: "2026-11-05",
    titulo: "Um novo capítulo",
    texto: String.raw`Catarina,

Hoje eu quero te contar...

Com carinho,
Marcelo.`
  }
```

4. Atenção à vírgula separando um bloco de outro. O exemplo acima tem **uma vírgula antes da abertura**. Se preferir colocar depois de uma carta já existente, você pode usar `{ ... },` como as outras.
5. Clique em `Commit changes`. O site passa a mostrar a carta automaticamente, sem alterar mais nenhum arquivo.
6. Para textos de Catarina, altere `autor: "Catarina"`. Use `ordem` para definir a posição de exibição (1, 2, 3...); ela determina a sequência, não a data.

Você também pode editar os textos já existentes, mudar os títulos, mudar as datas ou remover blocos inteiros. **Antes de editar, guarde uma cópia** das cartas originais.

## 4. Alterar o contador

Abra `config.js` e edite, se necessário:

```js
inicio: "2026-08-24T10:22:00-03:00"
```

- Esse horário usa `-03:00`, correspondente ao horário de Brasília na data indicada.
- O contador é calculado com o relógio real de quem está vendo, mesmo depois de fechar ou atualizar o site.
- Nunca reseta após 24 horas: os dias continuam aumentando.

## 5. Mudar o intervalo da troca de cartas

Em `config.js`:

```js
intervaloCarta: 30000
```

- 30000 = 30 segundos.
- 45000 = 45 segundos.
- 60000 = 1 minuto.
- Ao tocar ou rolar o texto, a troca automática é pausada para leitura. Clique em `Continuar passagem automática` para retomar.

## 6. Música da Marisa Monte

Para não reproduzir uma gravação protegida sem permissão, o site apresenta uma seção musical com espaço para **nome e link oficial**. Em `config.js`:

```js
musicaNome: "Nome da música — Marisa Monte",
musicaUrl: "https://..." // Cole o link oficial da música que vocês escolheram.
```

Esse título é apenas um **exemplo de preenchimento** — substitua pelo nome correto da música de vocês. Não coloque letras completas protegidas no site sem autorização. Se tiver autorização para incorporar um player oficial, isso pode ser implementado numa futura versão.

## 7. Trocar lembranças e imagens

- Abra `index.html` e procure a seção `id="fio"` para editar os cartões das lembranças.
- Se quiser trocar a imagem das mãos, envie uma nova imagem ao repositório e altere o trecho `src="maos-fio-vermelho.webp"` pelo nome correto do arquivo.
- Para trocar cores e fontes, abra `styles.css` e edite as variáveis que começam com `--bg`, `--red`, `--gold`.
- Para alterar o texto de boas-vindas, procure `<section id="inicio"` no `index.html`.

## 8. Notas importantes antes de publicar

- **Privacidade:** o GitHub Pages gera um site público mesmo quando um plano permite repositório privado. Qualquer pessoa com o link (e potencialmente buscadores) poderá ler as cartas, e o código-fonte também é público se o repositório for público. Verifique com os autores o que desejam publicar; retire detalhes particulares caso necessário.
- O arquivo tem a carta de 05/10/2026 de Marcelo **uma única vez**, pois ela foi enviada duas vezes com pequenas diferenças. Foi usada a versão de 2026.
- A carta “Nosso primeiro mês” foi fornecida **sem data**. A posição dela está marcada em `ordem: 6`; o site exibe “data não informada”.
- Algumas cartas de Catarina mencionam 15/08; o relógio, por escolha do autor do presente, começa em **24/08/2026 às 10h22**.
- Sally/Relâmpago McQueen e as camisetas são mencionados em texto; não foram adicionadas imagens oficiais protegidas por direitos autorais.
- Há referências à música de Marisa Monte, mas nenhuma gravação/trecho de letra foi incorporado.

## 9. Se der algum erro

- Tela sem estilo: confira que `styles.css` foi enviado com esse nome exato.
- Cartas não aparecem: confira que `cartas.js` e `script.js` estão na mesma pasta que `index.html` e que as vírgulas/crases de `cartas.js` foram preservadas.
- Imagem das mãos não carrega: confira que `maos-fio-vermelho.webp` está junto do `index.html`.
- Site demora a atualizar: após o commit, verifique `Actions` ou `Settings > Pages` para conferir se a publicação foi concluída. Faça uma recarga forçada do navegador se necessário.
- Antes de publicar, você pode abrir `index.html` no seu computador para conferir o resultado em um navegador; não precisa de conta GitHub para visualizar localmente.

---

Este projeto é uma primeira edição. Ele foi pensado para crescer com novas cartas, capítulos, fotografias, símbolos e lembranças.
