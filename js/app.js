/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Select the navbar list element
const navbarList = document.getElementById('navbar__list');

// Select all sections in the main content
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * 
 * 
 * Begin Main Functions
 * 
*/

// build the nav

// Loop through each section to create navigation items
sections.forEach(section => {
    // Get the data-nav attribute value
    const sectionName = section.getAttribute('data-nav');
    
    // Create a new list item (li) element
    const listItem = document.createElement('li');
    
    // Create a new anchor (a) element
    const anchor = document.createElement('a');
    
    // Set the anchor's text content and href attribute
    anchor.textContent = sectionName;
    anchor.href = `#${section.id}`; // Link to the section by its ID
    
    // Add a class to the anchor for styling (optional)
    anchor.classList.add('menu__link');
    
    // Append the anchor to the list item
    listItem.appendChild(anchor);
    
    // Append the list item to the navbar list
    navbarList.appendChild(listItem);
});


/** 
 *  Add class 'active' to section when near top of viewport
 */

// Function to highlight the active section


function highlightActiveSection() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    ////const activeNav = document.querySelector('nav a'); ///////

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
       

        // Check if the section is in the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all sections
            sections.forEach(sec => sec.classList.remove('active'));

         

            // Add active class to the current section
            section.classList.add('active');

            /////activeNav.classList.add('active-nav'); ////////


        }
    }); 

}

// Add scroll event listener
window.addEventListener('scroll', highlightActiveSection);




/**************


function highlightActiveSection() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all sections
            sections.forEach(sec => sec.classList.remove('active'));
            // Add active class to the current section
            section.classList.add('active');

        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', highlightActiveSection);

***********/




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * 
 * 
 * Begin Events
 * 
*/

// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

   // 1. Remove 'active-nav ' class from all navigation links
   document.querySelectorAll('a[href^="#"]').forEach(link => link.classList.remove('active-nav'));

   // 2. Add 'active-nav' class to the clicked link, so that the user knows which section was selected according to the navigation
   this.classList.add('active-nav');


     
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // Optional: Add smooth scrolling behavior  
        });


    });
});




