
const subNavigationBtn = document.querySelector(".sub-nav button");



const openSubMenu = () =>
{
    const subNavigationMenu = document.querySelector(".sub-nav-content");
    subNavigationMenu.classList.toggle("show");  
}


subNavigationBtn.addEventListener("click",openSubMenu);