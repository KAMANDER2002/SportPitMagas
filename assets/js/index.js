const app = document.querySelector('#content');
let timer;
const route = (location) => 
{   
	switch (location) {
		case '#/' :
		     location = '#/home/'
			 handleLocation(location);
			break
		case "#/about/":
		     clearTimeout(timer);
			 handleLocation(location);
	   break
		case "#/tovars/":
		     clearTimeout(timer);
			 handleLocation(location);
			break
	    case "#/contacts/":
	         clearTimeout(timer);
			 handleLocation(location);
	    break
	    case "#/autorization/":
	         clearTimeout(timer);
			 handleLocation(location);
	    break
	}
}
window.addEventListener('load',() => 
	{ 
		const location = window.location.hash;
		const path = window.location.hostname + location;
		console.log(path)
		if(path == window.location.hostname){
			route('#/')
		}else{ 
		route(location);
	       }
	});
const handleLocation = async (routes) => {
  const html = await fetch(routes.slice(1)).then((data) => data.text());
  app.innerHTML = html;
  switch (routes) {
  	case '#/home/':

  	     const images = document.querySelectorAll(".slider .slider-body img");
         const slider_body = document.querySelector('.slider-body')
         let count = 0;
         let slider_width;
        window.addEventListener('resize',init);
        init();
         function init(){
         	clearTimeout(timer)
	       slider_width = document.querySelector('div[class="slider"]').offsetWidth;
           slider_body.style.width = slider_width * images.length + 'px';
           images.forEach(item => {
    	   item.style.width = slider_width + 'px';
    	   item.style.height = 'auto';
                        });  
        slider_body.style.transform = 'translate(-' + count * slider_width +'px)';
			    next();

			}
           function next(){
            count++;
               if(count >= images.length)
      				{
      					count = 0;
      					clearTimeout(timer);
      				}
     		 slider_body.style.transform = 'translate(-' + count * slider_width +'px)';
     		 AutoSlider();
                          }
               function AutoSlider()
               { 
                  timer = setTimeout(next, 5000);
               }           
  		break;
  		case '#/contacts/':
  		  
  		break;
  }
};
  const popup_aut = document.querySelector('#popup');
  function popupUp()
  {
  	popup_aut.classList.add('popup-autorization');
  }
  function popupDown()
  {
  	popup_aut.classList.remove('popup-autorization');
  }
/*
const tovar = document.querySelectorAll('#tovar-item');
if(tovar != null){
window.addEventListener('load', () => {
	console.log('loaded')
	GetTovars();
}
)
}
	$('.tovar-link').click(()=>
{
	console.log('clicked')
	GetTovars();
}
)

function GetTovars()
{
 $.ajax(
	{   
		url:'https://localhost:44310/api/Products',
		success: (result) => {
			let data = JSON.parse(JSON.stringify(result));
			$('#tovar-item').html(data);
			for(dat of data)
			{
              $('#tovar-item').append(dat.name_Product + '<br/>');
			}
		}

	})
} 
*/


