// const icon = document.querySelectorAll('.icon span');
// icon.forEach((icon)=>{
//     icon.addEventListener('mouseenter',(e)=>{
//        console.log(e.relatedTarget.childNodes);
//         e.relatedTarget.childNodes[1].style.opacity = '1'
//         e.relatedTarget.style.backgroundColor = '#D9A520' 
//     })
// })
// icon.forEach((icon)=>{
//     icon.addEventListener('mouseleave',(e)=>{
//         e.relatedTarget.childNodes[1].style.opacity = '0'
//         e.relatedTarget.style.backgroundColor = '#000' 
//     })
// })
let body = document.querySelector('body');
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.querySelector('p').style.opacity = '1';
        icon.style.backgroundColor = '#D9A520';
    });
    icon.addEventListener('mouseleave', () => {
        icon.querySelector('p').style.opacity = '0';
        icon.style.backgroundColor = '#000';
    });
});




let menu = document.querySelector('nav .menuicon span');

menu.addEventListener("click",(e)=>{
   let menubar = document.createElement('div')
  menubar.className = 'menubar'
  
   body.appendChild(menubar)
})

let close = document.querySelector(".close span")

close.addEventListener("click",(e)=>{
    let menubar = document.querySelector(".menubar")
    menubar.classList.remove('menubar');
    menubar.style.display = 'none'
})