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
const navLinks = document.querySelectorAll('nav ul li a'); // Added for Intersection Observer

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
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the navigation menu

function buildNav() {
  sections.forEach((section) => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = section.dataset.nav;
    navLink.classList.add('menu__link');
    navLink.href = `#${section.id}`;
    navLink.addEventListener('click', function (event) {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });
}

// Add or remove the 'active-class' based on scroll logic

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeSection = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
          link.classList.add('active');
        }
      });
      entry.target.classList.add('your-active-class');
    } else {
      entry.target.classList.remove('your-active-class');
    }
  });
}, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build the navigation menu when the DOM is fully loaded

document.addEventListener('DOMContentLoaded', buildNav);

// Set sections as active when scrolling

// The Intersection Observer handles this, no need for an additional scroll event listener
