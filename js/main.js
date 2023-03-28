AOS.init({
  duration: 1500,
});

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,

  // effect: "coverflow",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/****************** start gallery section *************************/

let gallery_items = document.querySelectorAll(".gallery .item");
let modal_img = document.querySelector(".modal img");
let modal_title = document.querySelector(".modal .modal-title");

gallery_items.forEach((element, index) => {
  element.addEventListener("click", () => {
    // add image to modal
    modal_img.src = `img/portfolio-${index + 1}.jpg`;
    // add image number to modal title
    modal_title.innerHTML = `Image ${index + 1}`;
  });
});

let gallery_tabs = document.querySelectorAll(".gallery .btn-group .btn");

gallery_tabs.forEach((element) => {
  element.addEventListener("click", () => {
    // category name
    let category = element.innerHTML.toLowerCase();

    gallery_items.forEach((ele) => {
      if (ele.classList.contains(category)) {
        ele.classList.add("show");
        ele.classList.remove("hide");
      } else {
        ele.classList.add("hide");
        ele.classList.remove("show");
      }
    });
  });
});

/****************** end gallery section *************************/






$('.filter-button').on('click', (e) => {
  const filter = $(e.target).attr('data-filter');
  console.log(filter);
 	const items = $('.item-content').parent();
  for (item of items) {
    if (filter == '') {
      
        $(item).addClass('animated zoomIn faster');
      $(item).parent().addClass('animated zoomIn faster');
      $(item).removeClass('d-none');
      $(item).parent().removeClass('d-none');
      
     
      console.log('x');
    }else if ($(item).attr('data-category') == filter) {
      $(item).addClass('animated zoomIn faster');
      $(item).parent().addClass('animated zoomIn faster');
      $(item).removeClass('d-none');
      $(item).parent().removeClass('d-none');
    } else {
      $(item).addClass('d-none');
      $(item).parent().addClass('d-none');
      $(item).removeClass('animated zoomIn faster');
      $(item).parent().removeClass('animated zoomIn faster');
    }
  }
});








// show photo

var imgs = document.querySelectorAll(".item-content img")
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');


var closeIcon = document.getElementById('close');
var nextIcon = document.getElementById('next');
var prevIcon = document.getElementById('prev');
var currentIndex = 0;



for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function (e) {
    var currentSrc = e.target.src;
    lightboxContainer.style.display="flex";
    lightboxItem.style.backgroundImage = `url(${currentSrc})`;
  })
}

closeIcon.addEventListener('click',function(){
  lightboxContainer.style.display="none"

} )

//skitter
$(document).ready(function() {
  $(".skitter-large").skitter();
});






$('.test').hide(2000)












