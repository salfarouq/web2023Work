function replaceImages() {
  var images = document.querySelectorAll('img');
  images.forEach(function(image) {
    image.src = 'https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif';
  });
}

const capitalizeParagraphs = () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    const text = paragraph.textContent;
    paragraph.textContent = text.toUpperCase();
  });
}

document.addEventListener('DOMContentLoaded',function(){
	document.querySelectorAll('button').forEach(function(button){
		button.onclick=function(){
			document.querySelectorAll('h1').style.color=button.dataset.color;
		};
		
	});
})
