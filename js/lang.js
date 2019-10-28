// header language switch

//footer language switch

let mainBlock = document.querySelector('.footer-lang__main');
let drop = document.querySelector('.footer-lang__dropdown');


let toggleDrop = () =>
{
  drop.classList.toggle('show');
}

mainBlock.addEventListener('click', e =>
{
  e.stopPropagation();
  toggleDrop();
});

document.addEventListener('click', e =>
{
  let target = e.target;
  let its_mainBlock = target == mainBlock;
  let its_drop = target == drop || drop.contains(target);
  let drop_showed = drop.classList.contains('show');

  if(!its_mainBlock && !its_drop && drop_showed)
  {
    toggleDrop();
  }
});
