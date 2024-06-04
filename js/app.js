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
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Check if a section is in the viewport, add parameter function from test code 
*/
function isInViewport(section) {
    const rect = section.getBoundingClientReact();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
} 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
  sections.forEach(section => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = section.dataset.nav;
    navLink.classList.add('menu__link');
    navLink.href = `#${section.id}`;
    navLink.addEventListener('click', function(event) { 
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
    });
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });  
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


