import { fetchQuote } from './api';
import { quoteContainer } from './refs';

const LOCAL_STORAGE_KEY = 'quote';
getQuote();

async function getQuote() {
  try {
    const data = await fetchQuote();
    createQuote(data);
    saveToLocalStorage(data);
  } catch (e) {
    console.log(e.message);
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

  quoteContainer.forEach(container => {
    container.innerHTML = markup;
  });
}

function saveToLocalStorage({ author, quote }) {
  const quoteInfo = {
    author,
    quote,
    date: new Date().getDate(),
  };
  try {
    const quoteInfoJson = JSON.stringify(quoteInfo);

    localStorage.setItem(LOCAL_STORAGE_KEY, quoteInfoJson);
  } catch (e) {
    console.log(e.message);
  }
}

function checkQuoteInLocalStorage() {
  try {
    const savedQuote = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedQuote) {
      let parsedData = JSON.parse(savedQuote);
      let currentDate = new Date().getDate();

      if (parsedData.date !== currentDate) {
        getQuote();
      }
    }
  } catch (e) {
    console.log(e.message);
  }
}
checkQuoteInLocalStorage();
