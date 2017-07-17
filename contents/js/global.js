const navToggle = document.querySelector('.burger');
const headerNav = document.querySelector('.header-nav');
const headerNavList = document.querySelector('.header-nav__list');
const sideNavTrigger = document.querySelector('.trigger');
const sidenavContaner = document.querySelector('.sidenav');
const URL = window.location.pathname;

let navOpen = false;
let isSideNavOpen = false;

$(".article__primary").find(".more").parent().prev().remove();
$(".article__primary").find(".more").parent().prev().remove();
$(".article__primary").find(".more").parent().prev().remove();
$(".article__primary").find(".more").remove();

navToggle.addEventListener('click', function() {
  sideNavTrigger ? sideNavTrigger.classList.toggle('hide') : () => null;
  this.classList.toggle('active');
  headerNav.style.maxHeight = !navOpen ? `${headerNavList.offsetHeight}px` : 0;
  navOpen = !navOpen;
});

sideNavTrigger.addEventListener('click', function() {
  sidenavContaner.classList.toggle('active');
  navOpen = !navOpen;
});

sidenavContaner.querySelectorAll('.sidenav__item a').forEach((item) => {
  item.pathname === URL ? item.classList.add('active') : null;
})
