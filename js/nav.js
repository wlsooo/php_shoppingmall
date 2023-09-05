const menu = document.getElementsByClassName("bi-list")[0];
const navList = document.getElementsByClassName("nav-list")[0];

menu.onclick = () => {
    navList.classList.toggle("show-menu");
}