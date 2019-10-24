let modalCall = document.querySelectorAll("[data-modal]");
let modalClose = document.querySelectorAll("[data-close]");
let modalWindow = document.getElementsByClassName("modal");
let modalDialog = document.getElementsByClassName("modal__dialog");

for(let i=0; i<modalCall.length; i++)
{
  modalCall[i].addEventListener('click', function(event)
  {
    event.preventDefault();
    let modalName = modalCall[i].getAttribute('data-modal');
    document.getElementById(modalName).classList.add('show');
    document.body.classList.add('no-scroll');

    // animation modal__dialog
    setTimeout(function()
    {
      document.getElementById(modalName).getElementsByClassName("modal__dialog")[0].style.transform='translateY(0)';
    }, 100);
  });
}

for(let i=0; i<modalClose.length; i++)
{
  modalClose[i].addEventListener('click', function (event)
  {
    event.preventDefault();
    let modalParent = modalClose[i].closest(".modal");


    // animation modal__dialog
    modalClose[i].closest('.modal__dialog').style.transform='translateY(-1000px)';
    setTimeout(function()
    {
      modalParent.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }, 200);
  });
}

for(let i=0; i<modalWindow.length; i++)
{
  modalWindow[i].addEventListener('click', function(event)
  {
    //animation modal__dialog
    modalWindow[i].getElementsByClassName('modal__dialog')[0].style.transform="translateY(-1000px)";
    setTimeout(function()
    {
      modalWindow[i].classList.remove('show');
      document.body.classList.remove('no-scroll');
    }, 200);

    ////

    // modalWindow[i].classList.remove('show');
    // document.body.classList.remove('no-scroll');
  });
}

for(let i=0; i <modalDialog.length; i++)
{
  modalDialog[i].addEventListener('click', function(event)
  {
    event.stopPropagation();
  });
}
