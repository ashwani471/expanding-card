const panels = document.querySelectorAll('.panel');

// console.log(panels);
panels.forEach(panel=>{
    panel.addEventListener('click',function(){
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}