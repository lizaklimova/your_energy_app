import { fetchQuote } from './api';
import { quoteContainer } from './refs';

getQuote();

async function getQuote() {
  try {
    const data = await fetchQuote();
    createQuote(data);
    saveToLocalStorage(data);
  } catch {
    e => console.log(e);
  }
}

function createQuote({ author, quote }) {
  const markup = `<div class="info__wrapper">
  <h3 class="info__wrapper-title">Quote of the day</h3>
  <p class="info__wrapper-quote">
   ${quote}
  </p>
  <p class="info__wrapper-author">${author}</p>
</div>`;

  quoteContainer.innerHTML = markup;
}

const LOCAL_STORAGE_KEY = 'quote';
const date = new Date().getDate();

function saveToLocalStorage({ author, quote }) {
  const quoteInfo = {
    author,
    quote,
    date,
  };
  try {
    const quoteInfoJson = JSON.stringify(quoteInfo);

    localStorage.setItem(LOCAL_STORAGE_KEY, quoteInfoJson);
  } catch {
    error => console.log(error.message);
  }
}

function checkQuoteInLocalStorage() {
  try {
    const savedQuote = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedData = JSON.parse(savedQuote);

    if (parsedData.data !== date) {
      getQuote();
    }
  } catch {
    error => console.log(error.message);
  }
}
checkQuoteInLocalStorage();
