// Найти все ссылки начинающиеся на #
let anchors = document.querySelectorAll('header a[href*="#"]');

for(anchor of anchors){
  if(anchor){
    anchor.addEventListener('click',function (e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.info');
window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top+300>= offset && top < offset + height+5000){
      navLinks.forEach(links =>{
        links.classList.remove('active')
        document.querySelector('header div div nav li a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}

let page = document.querySelector('.light-theme');
let themeButton = document.querySelector('.theme-button');
let header_bloc = document.querySelector('.header_bloc');
let img = document.querySelector('.theme-button');
 let area = document.querySelector('.text_area');
 let input = document.querySelectorAll('.input');
//let lefttButton = document.querySelector('.testimonials_button');
//let righttButton = document.querySelector('.testimonials_button2');
let text1= document.querySelectorAll('.text');
let texe2=document.querySelectorAll('.servies');
let strip =document.querySelectorAll('.strip');
let header2 = document.querySelectorAll('.info');
let strip2 = document.querySelector('.container5_href');
let text3 = document.querySelectorAll('.about-right-text');

let ava = document.querySelector('[src="./img/moon-outline.svg"]');
let ava2 =document.querySelector('[src="./img/st.svg"]');
let i =0;

let menu = document.querySelector('.menu');
// let menu2 = document.querySelector('.menu__icon');
// let span = document.querySelector('.menu__icon');


themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
  header_bloc.classList.toggle('header_bloc');
  header_bloc.classList.toggle('header_dark');
  img.classList.toggle('theme-button');
  img.classList.toggle('theme-button_dark');
  area.classList.toggle('text_area');
  area.classList.toggle('text_area_dark');
 // lefttButton.classList.toggle('testimonials_button');
 // lefttButton.classList.toggle('testimonials_button_dark');
 // righttButton.classList.toggle('testimonials_button2');
 // righttButton.classList.toggle('testimonials_button2_dark');
  strip2.classList.toggle('container5_href_dark');
  strip2.classList.toggle('container5_href');
  menu.classList.toggle('menu_dark');
  menu.classList.toggle('menu');
  // menu2.classList.contains('.dark_theme');
  let temp;
  for (let i = 0; i < text1.length; i++) {
    temp = text1[i];
    temp.classList.toggle('text_dark');
  }
  for (let i = 0; i < texe2.length; i++) {
    temp = texe2[i];
    temp.classList.toggle('servies_dark');
    temp.classList.toggle('servies');
  }
  for (let i = 0; i < strip.length; i++) {
    temp = strip[i];
    temp.classList.toggle('strip_dark');
    temp.classList.toggle('strip');
  }
  for (let i = 0; i < header2.length; i++) {
    temp = header2[i];
    temp.classList.toggle('info_black');
    temp.classList.toggle('info');
  }
   for (let i = 0; i < input.length; i++) {
     temp = input[i];
     temp.classList.toggle('input_black');
     temp.classList.toggle('input');
   }
   for (let i = 0; i < text3.length; i++) {
     temp = text3[i];
     temp.classList.toggle('about_info_title_dark');
    temp.classList.toggle('about-right-text');
   }
  if(i==1){
    ava.setAttribute('src','./img/moon-outline.svg');
  //  ava2.setAttribute('src','img/st.svg');
    i=0;
  }
  else {
    ava.setAttribute('src','./img/sunny-outline.png');
   // ava2.setAttribute('src','img/st_dark.png');
    i=1;
  }
};


let rightButton = document.querySelector('.testimonials_button2');
let leftButton = document.querySelector('.testimonials_button');
let arrayPhoto = ["./img/img4.jpg", "./img/img1.jpg", "./img/img2.jpg","./img/img3.jpg"];
let arrayInfo = ["Alexey helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
  "The contractor did an excellent job and offered adequate solutions for the nuances that arose. I recommend and will use again",
  "The man did an excellent job.I recommend! I will definitely use his services",
  "Master of his craft. The work was done quickly."];
let arrayName = ["Smirnov Kirill", "Nikita Lutsenko", "Makarov Dmitry","Maxim Korablev"];
//let arrayJob = ["Просто", "fronted noob", "java developer","2 frontend developers"];
let count = 0;

let photo_terminate = document.querySelector('.testimonials_img');
let info_document = document.querySelector('.testimonials_text');
let name_document  = document.querySelector('.testimonials_bloc2_text');
let job_document  = document.querySelector('.testimonials_bloc2_job');
rightButton.onclick = function(){
  if(count != arrayPhoto.length-1){
    count++;
  }
  else {
    count=0;
  }
  let photo = arrayPhoto[count];
  let info = arrayInfo[count];
  let name = arrayName[count];
  // let job = arrayJob[count];
  console.log(photo);
  photo_terminate.setAttribute('src',photo);
  info_document.innerHTML = info;
  name_document.innerHTML = name;
  //  job_document.innerHTML = job;
}
leftButton.onclick = function(){
  if(count != 0){
    count--;
  }
  else if(count==0){
    count=arrayPhoto.length-1;
  }
  let photo = arrayPhoto[count];
  let info = arrayInfo[count];
  let name = arrayName[count];
  // let job = arrayJob[count];
  console.log(photo);
  photo_terminate.setAttribute('src',photo);
  info_document.innerHTML = info;
  name_document.innerHTML = name;
  //  job_document.innerHTML = job;
}

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('--active');
      });
    }
    }
  } else {
    document.body.classList.add('_pc');
  }

// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.link-li');
let menuBody2 = document.querySelector('.menu_dark');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    // document.body.classList.toggle('--lock');
    iconMenu.classList.toggle('--active');
    menuBody.classList.toggle('--active');
    menuBody2.classList.toggle('--active');
  });
}


 menuLink.forEach(item => {
  item.addEventListener('click', () => {
    // document.body.classList.toggle('--lock');
    iconMenu.classList.toggle('--active');
    menuBody.classList.toggle('--active');
    menuBody2.classList.toggle('--active');
  })
 })

// Прокрутка при клике 

/*const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('--active')) {
         document.body.classList.remove('--lock');
         iconMenu.classList.remove('--active');
         menuBody.classList.remove('--active');
      }


      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}*/
