
var data;

let button = document.getElementById('buttonQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
  
const displayQuote = () => {
  let index = Math.floor(Math.random() * data.length);
  quote.innerHTML = data[index].text;

  if(!(data[index].author)){
    author.innerHTMLhor = "- Anonymous -";
  } else {
    author.innerHTML = "- " + data[index].author + " -";
  }
  
}

async function fetchQuotes() {
  const URL = `https://type.fit/api/quotes`;
  try {
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    data = await response.json();
    displayQuote();
  } catch(e){
    throw Error(e);
  }
}
 
fetchQuotes();
button.addEventListener('click', fetchQuotes);