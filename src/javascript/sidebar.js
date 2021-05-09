const sideNavBar = document.querySelector('#sideNavBar');
const sideNavBarBtn = document.querySelector('#sideNavBarBtn');
const main = document.querySelector('#main');
const sideBarIcon = document.querySelectorAll('.side-navbar-btn__icon')[0];
const overlay = document.querySelectorAll('.overlay')[0];

let showSideBar = false;

function toggleSideNavBar() {
  if (showSideBar) {
    sideNavBar.classList.remove('side-navbar--open');
    sideBarIcon.classList.remove('side-navbar-btn__icon--open')
    overlay.classList.remove('overlay--is-active')
    showSideBar = false;
  } else {
    sideNavBar.classList.add('side-navbar--open');
    sideBarIcon.classList.add('side-navbar-btn__icon--open')
    overlay.classList.add('overlay--is-active')
    showSideBar = true;
  }
}


sideNavBarBtn.addEventListener("click", toggleSideNavBar);
overlay.addEventListener("click", toggleSideNavBar);
// main.addEventListener("click", closeSideNavBar);
