//change nav bafr styles on scroll//

//when we try to scroll the nav menu should come with a background colour while scrolling//

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    //window scroll with a background will start from 0 pixel //
    ('window-scroll', window.scrollY > 0)
})
