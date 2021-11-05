// references
const quoteContainer = document.querySelector('#quote-container');
const newQuoteBtn = document.querySelector('#new-quote');
const twitterBtn = document.querySelector('#twitter');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');

//Events Listeneres
newQuoteBtn.addEventListener('click', randomQuote);

let quotes = [];

// randomQuote
function randomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1));
  const singleQuote = quotes[randomNumber];
  quoteText.textContent = singleQuote.text;
  authorText.textContent = singleQuote.author;
}

// get quotes

async function getQuotes() {
  const url = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(url);
    quotes = await response.json();
    randomQuote();
  } catch (error) {
    alert(error);
  }
}
getQuotes();

// fetch(url)
//   .then((response) => response.json())
//   .then((result) => console.log(result.length));
