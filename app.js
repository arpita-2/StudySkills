//change nav bafr styles on scroll//

//when we try to scroll the nav menu should come with a background colour while scrolling//

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
})
