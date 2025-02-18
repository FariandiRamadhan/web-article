
const cards = Array.from(document.getElementsByClassName('card'));
const totalCards = cards.length;

// Card width including margin (300px + 15px each side)
const cardWidth = cards[0]?.offsetWidth + 15;
  
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const status = document.getElementById('status');
const menuBtn = document.querySelector(".menu-btn");
const dropdownMobile = document.querySelector(".dropdown-mobile");

// Adding ... at the end of text because the text is too long
cards?.forEach(element =>{
    const title = element.getElementsByClassName('title')[0];
    const desc = element.getElementsByClassName('desc')[0];
    title.textContent = truncateText(title.textContent, 40);
    desc.textContent = truncateText(desc.textContent, 120);
});

// Activate mobile menu
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    dropdownMobile.classList.toggle("active");
});

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
// State
let currentIndex = 0;
  
// Move to previous card
function movePrev() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}
  
// Move to next card
function moveNext() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}
  
// Update carousel position and status
function updateCarousel() {
    // Circular scrolling with 4 cards
    carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}
  
// Initialize carousel
function initCarousel() {
    updateCarousel();
    
    // Event listeners
    prevBtn.addEventListener('click', movePrev);
    nextBtn.addEventListener('click', moveNext);
}
  
// Start the carousel
initCarousel();