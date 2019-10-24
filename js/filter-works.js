let filter = document.getElementById('menu');
let content = document.querySelectorAll('[data-cat]');
filter.onclick = function(event)
{
  let target = event.target;
  event.preventDefault();
  if(target.getAttribute('data-filter'))
  {
    let cat = target.getAttribute('data-filter');

    for(let i=0; i<content.length; i++)
    {
      let catContent = content[i].getAttribute('data-cat');
      if(catContent != cat)
      {
        content[i].classList.add('hide');
      }
      else content[i].classList.remove('hide');
    }
    
    if(cat == 'all')
    {
      for(let i=0; i<content.length; i++)
      {
        content[i].classList.remove('hide');
      }
    }
  }
}
