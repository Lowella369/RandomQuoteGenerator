let quotes = ["You never know how strong you are, until being strong is your only choice.",
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "When something bad happens you have three choices. You can either let it define you, let it destroy you, or you can let it strengthen you.",
  "Strength does not come from physical capacity. It comes from an indomitable will.",
  "Promise me you'll always remember: You're braver than you believe, and stronger than you seem, and smarter than you think."
]


let button = document.getElementById('quoteButton');
let quote = document.getElementById('quote');

function quoteSelector(){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

function showQuote(){
  quote.innerHTML = quoteSelector();

}

button.addEventListener('click', showQuote);