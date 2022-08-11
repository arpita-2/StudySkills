//change nav bafr styles on scroll//

//when we try to scroll the nav menu should come with a background colour while scrolling//
//animation on scroll insta


window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    //window scroll with a background will start from 0 pixel //
    ('window-scroll', window.scrollY > 0)
    
})


//============FAQS==========================================================================//
//show/hide FAQS answers//

//query selector all has been given to select all query from the faq class//

const faqs = document.querySelectorAll('.faq');
//i want to look through all of the faqs, so faqs means that particular section.
//For each of faq event im going to add  addevent listener which is a click event.
//on click im going to run this function

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        //on click i want to toggle the open class
        faq.classList.toggle('open');
        //it will only toggle but it is not changing the icon so, now i want to change icon after clicking

        //change icon
        //getting icon with the class faq
        const icon = faq.querySelector('.faq-icon  i');
        //if the icon is plus 
        if(icon.className ===  'uil uil-plus') {
      
            icon.className = 'uil uil-minus'

        } else{
            icon.className = "uil uil-plus";
        }
    })

    AOS.init();
})

//=========================================media query=========================================================
//---------------show hide nav menu when click on bar--------------------------------------
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");

const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    //menu then change the style of the display into flex when click on open menu button
    menu.style.display = "flex";
    //it will show the menu list
    closeBtn.style.display = "inline-block";
    //it will show immediately the cross  button 
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}


closeBtn.addEventListener('click', closeNav)



