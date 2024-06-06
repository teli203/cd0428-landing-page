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
 * Check if a section is in the viewport
 * 
 * @param {HTMLElement} section - The section to check parameter
 * @return {boolean} - True if the section is in the viewport
 */
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
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

function setActiveSection() {
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            navLink.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('active');
        }
    });  
}

// Add or remove the 'active-class' based on scroll logic

document.addEventListener('scroll', function() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });
});

// Scroll to anchor ID using scrollTO event
/* in line 62 of buildNav code */

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
/* in line 61 of buildNav code */

// Set sections as active

document.addEventListener('scroll', setActiveSection);

/* 
** Removed from test code file just in case its need for re-attempt **

function makeActive(){
    for (cons section of sections) {
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= VALUE && box.bottom >= VALUE) {
        //apply active state on current section and corresponding Nav link
        } else {
        //Remove active state from other section and corresponding Nav link
        }
     }
} 

Call the makeActive() function whenever the user scrolls the page.
// Make sections active document.addEventListener("scroll", function() { makeActive();});

   * Set CSS class active state when the element is in the viewport.
   * *Hint: see this* <a href="https://knowledge.udacity.com/questions/85408" target="_blank">*Knowledge post*</a> *to implement this functionality.*

<br data-md>
*/