let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

  counter.innerText = count;
  count++;
  
  // You put your URL where it says location.replace in the quotes.
  if (count > 5) location.replace('hello.html')

},1000)
