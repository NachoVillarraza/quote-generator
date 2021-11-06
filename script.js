// references
const quoteContainer = document.querySelector('#quote-container');
const newQuoteBtn = document.querySelector('#new-quote');
const twitterBtn = document.querySelector('#twitter');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const loader = document.querySelector('#loader');

let quotes = [];

// funciones para el spinner
function loadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function completeSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// randomQuote
function randomQuote() {
  loadingSpinner();
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1));
  const singleQuote = quotes[randomNumber];

  // Check si contiene autor
  if (!singleQuote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = singleQuote.author;
  }
  // Check el largo de la frase
  if (singleQuote.text.length > 100) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = singleQuote.text;
  completeSpinner();
}

// get quotes

async function getQuotes() {
  loadingSpinner();
  const url = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(url);
    quotes = await response.json();
    randomQuote();
  } catch (error) {
    alert(error);
  }
}

// tweetear la frase

function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text= "${quoteText.textContent}" - ${authorText.textContent}`;
  window.open(tweetUrl, '_blank');
}

//Events Listeneres
newQuoteBtn.addEventListener('click', randomQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();

// fetch(url)
//   .then((response) => response.json())
//   .then((result) => console.log(result.length));
