

//DOM(document object model)
/*
1-select element in html
  var demo = document.getElementById('demo');  //dom statement
  var test1 = Array.from(document.getElementsByClassName('form-control'));//coll
  var test2 = document.getElementsByTagName('input');//coll
  var test3 = document.getElementsByName('gender');//nodelist
  var test4 = document.querySelector('.form-control')
  var test5 = document.querySelectorAll('input');  //nodelist
  --------------------------------
2-change html or style
demo.innerHTML='web development';
test.style.color='#f00';
test.style.backgroundColor='gray';
test.style.position='relative';
test.style.left='200px';
test.style.fontSize='30px';
------------
test.classList.add('two');
test.classList.remove('two');
console.log(test.classList.contains('nddb'));
test.classList.replace('test','two');
-------------
test.style.cssText='background-color:#09c !important;color:tomato';
------------------------------
3-change attributes in html
var img = document.querySelector('img');
img.src = 'images/two.png';
img.alt='hamada'

var link=document.querySelector('a');
link.href='https://www.google.com/';
link.target='_blank'
--------------------
4-addEventListner
 -seperate function of logic
 -add event on more than one element(for loop)
 -event info

 element,event,action
*/



var imgs = Array.from(document.querySelectorAll('.item-content'));
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');

var closeIcon = document.getElementById('close');
var nextIcon = document.getElementById('next');
var prevIcon = document.getElementById('prev');
var currentIndex = 0;
        
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function (e) {
    currentIndex = imgs.indexOf(e.target);
    var currentSrc = e.target.src;
    lightboxItem.style.backgroundImage = `url(${currentSrc})`;
    lightboxContainer.style.display = 'flex';
  })
}

closeIcon.addEventListener('click', closeSlider)
function closeSlider(){
  lightboxContainer.style.display = 'none'  
}
nextIcon.addEventListener('click', getNextSlide)
function getNextSlide(){
  currentIndex++;
  if(currentIndex==imgs.length)
  {
    currentIndex=0
  }
  var currentSrc = imgs[currentIndex].src;
  lightboxItem.style.backgroundImage = `url(${currentSrc})`;
}
prevIcon.addEventListener('click', getPrevSlide)
function getPrevSlide(){
  currentIndex--;
  if(currentIndex<0)
  {
    currentIndex=imgs.length-1
  }
  var currentSrc = imgs[currentIndex].src;
  lightboxItem.style.backgroundImage = `url(${currentSrc})`;
}

document.addEventListener('keyup',function(e){
    if(e.key=='ArrowLeft')
    {
      getPrevSlide()
    }
    else if(e.key=='ArrowRight')
    {
      getNextSlide()
    }
    else if(e.key=='Escape')
    {
      closeSlider()
    }
})







$('.test').hide(2000)
