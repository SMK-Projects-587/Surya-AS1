import '../scss/main.scss';
const hamburger = document.querySelector('.navbar__hamburger');
const links = document.querySelector('.navbar__links');
hamburger.addEventListener('click', function () {
  links.classList.toggle('is-open');
  hamburger.classList.toggle('is-active');
});
//----- FRESH-QUOTES ---
const cardContainer = document.querySelector('.fquotes__cards');
const shufflebtn = document.querySelector('.button--shuffle');
const genres = ['motivation', 'life', 'wisdom', 'success'];
function createQuoteCard(quote) {
  const card = document.createElement('figure');
  card.className = 'fquotes__card';

  const text = document.createElement('blockquote');
  text.className = 'fquotes__text';
  text.textContent = quote.quote;

  const meta = document.createElement('figcaption');
  meta.className = 'fquotes__meta';

  const author = document.createElement('span');
  author.className = 'fquotes__author';
  author.textContent = quote.author;

  const genre = document.createElement('span');
  genre.className = 'fquotes__genre';
  genre.textContent = genres[Math.floor(Math.random() * genres.length)];

  meta.append(author, genre);
  card.append(text, meta);
  return card;
}
function createBar(modifier) {
  const bar = document.createElement('span');
  bar.className = 'fquotes__bar';
  if (modifier) bar.classList.add(`fquotes__bar--${modifier}`);
  return bar;
}
function renderLoading() {
  cardContainer.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const skeleton = document.createElement('figure');
    skeleton.className = 'fquotes__card fquotes__card--skeleton';
    skeleton.setAttribute('aria-hidden', 'true');

    const text = document.createElement('blockquote');
    text.className = 'fquotes__text';
    text.append(createBar(), createBar('short'));

    const meta = document.createElement('figcaption');
    meta.className = 'fquotes__meta';
    meta.append(createBar('author'), createBar('genre'));

    skeleton.append(text, meta);
    cardContainer.append(skeleton);
  }
}
function renderQuotes(quotes) {
  cardContainer.innerHTML = '';
  quotes.forEach((quote) => {
    cardContainer.append(createQuoteCard(quote));
  });
}
function renderError() {
  cardContainer.innerHTML = '';
  const errorBox = document.createElement('div');
  errorBox.className = 'fquotes__error';
  const icon = document.createElement('span');
  icon.className = 'fquotes_icon';
  icon.textContent = '!';
  icon.setAttribute('aria-hidden', true);
  const msg = document.createElement('div');
  msg.textContent = "Couldn't load quotes.";
  msg.className = 'fquotes__msg';
  const retrybtn = document.createElement('button');
  retrybtn.textContent = 'Try again';
  retrybtn.className = 'fquotes__retry';
  retrybtn.addEventListener('click', getQuotes);
  errorBox.append(icon, msg, retrybtn);

  cardContainer.append(errorBox);
}
async function getQuotes() {
  renderLoading();
  try {
    const response = await fetch('https://dummyjson.com/quotes/random/6?delay=1000');
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    renderQuotes(data);
  } catch {
    renderError();
  }
}
shufflebtn.addEventListener('click', getQuotes);
getQuotes();
