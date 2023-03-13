const boxes = document.querySelectorAll('.content');

window.addEventListener('scroll', checkedBox)


function checkedBox(){
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach(content => {
        const boxTop = content.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}
checkedBox()