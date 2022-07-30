$(document).ready(function()
{
  $('.burger').click(function(event)
  { 
    console.log('clicked');
    $('.burger,.header-links').toggleClass('burger-active');
    $('.header-body').toggleClass('flex-space');
  })
})
function offset(el)
  {
    const rect = el.getBoundingClientRect(), 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
const header = document.querySelector('nav')
const headerHeight = offset(header).top;
window.addEventListener('scroll',() =>
{
   if(window.pageYOffset>headerHeight)
   {
    header.classList.add('header-fixed');
     $('#content').css({
       'paddingTop': header.offsetHeight +'px' // делаем отступ у body, равный высоте шапки
    });
   }
   else 
   {
    header.classList.remove('header-fixed');
     $('#content').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
});

