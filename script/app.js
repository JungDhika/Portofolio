const open = document.getElementById("open");
const close = document.getElementById("close");
const sidebar = document.getElementsByClassName("sidebar")[0];

document.addEventListener('DOMContentLoaded', () =>{
    open.addEventListener('click', () =>{
        sidebar.classList.add("sidebar_show");
    });
    close.addEventListener('click', () =>{
        sidebar.classList.remove("sidebar_show");
    });
});