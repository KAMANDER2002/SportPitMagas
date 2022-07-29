const app = document.querySelector('#content');
const route = (location) => 
{   
	switch (location) {
		case '#/' :
		    console.log('Домашняя');
		     location = '#/home/'
			 handleLocation(location);
			break
		case "#/about/":
			 handleLocation(location);
	   break
		case "#/tovars/":
			 handleLocation(location);
			break
	    case "#/contacts/":
			 handleLocation(location);
	    break
	    case "#/autorization/":
			 handleLocation(location);
	    break
	}
}
window.addEventListener('load',() => 
	{
		const location = window.location.hash;
		if(location){
		route(location);
	           }
	});
const handleLocation = async (routes) => {
	console.log(routes.slice(1))
  const html = await fetch(routes.slice(1)).then((data) => data.text());
  app.innerHTML = html;
};

const tovar = document.querySelectorAll('#tovar-item');
if(tovar != null){
window.addEventListener('load', () => {
	console.log('loaded')
	$.ajax(
	{   
		url:'https://localhost:44310/api/Products',
		success: (result) => {
			let data = JSON.parse(JSON.stringify(result));
			console.log(data);
			$('#tovar-item').html(data);
			for(dat of data)
			{
              $('#tovar-item').append(dat.name_Product + '<br/>');
			}
		}

	})
}
)
}
	$('.tovar-link').click(()=>
{
	console.log('clicked')
	$.ajax(
	{   
		url:'https://localhost:44310/api/Products',
		success: (result) => {
			let data = JSON.parse(JSON.stringify(result));
			console.log(data);
			$('#tovar-item').html(data);
			for(dat of data)
			{
              $('#tovar-item').append(dat.name_Product + '<br/>');
			}
		}

	})
}
)
