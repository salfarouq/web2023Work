function capitalize() {
	console.log('loaded');
  const headings = document.querySelectorAll('h1');
  headings.forEach(function(heading){
    const text = heading.textContent;
    heading.textContent = text.toUpperCase();
  });
}

document.addEventListener('DOMContentLoaded', fun);
function fun(){
  const paragraphs = document.querySelectorAll('#para');
  paragraphs.forEach(function(paragraph){

     const texts = paragraph.textContent;
  document.querySelector('#btn').onclick=function(){
    paragraph.textContent = texts.toUpperCase();
  }

  });
  
}