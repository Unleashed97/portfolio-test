// let btnMenu = document.getElementById("nav-toggle");
// let nav = document.getElementById("nav");
// btnMenu.onclick = function (event)
// {
//   event.preventDefault();
//   nav.classList.toggle("show");
//   if(nav.classList.contains('show')) document.body.classList.add("no-scroll");
//   else document.body.classList.remove("no-scroll");
// }

let btnMenu = document.getElementById("nav-toggle");
let nav = document.getElementById("nav");
btnMenu.onclick = function (event)
{
  event.preventDefault();
  nav.classList.toggle("show");
  btnMenu.classList.toggle("open")
  if(nav.classList.contains('show')) document.body.classList.add("no-scroll");
  else document.body.classList.remove("no-scroll");
}
