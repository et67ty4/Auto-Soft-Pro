let marqueeSlider = document.querySelector('.marquee-slider');
let mainTicker = new Flickity('.marquee-slider', {
  accessibility: true,
  resize: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  percentPosition: true,
  setGallerySize: true });


// Set initial position to be 0
mainTicker.x = 0;

// Start the marquee animation
play();

// Main function that 'plays' the marquee.
function play() {
  // Set the decrement of position x
  mainTicker.x -= 1.5;

  // Settle position into the slider
  mainTicker.settle(mainTicker.x);

  // Set the requestId to the local variable
  requestId = window.requestAnimationFrame(play);
}















let marqueeSlider2 = document.querySelector('.marquee-inifint'); // Fixed selector
let mainTicker2 = new Flickity('.marquee-inifint', { // Fixed selector here too
  accessibility: true,
  resize: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  percentPosition: true,
  setGallerySize: true 
});

// Set initial position to be 0
mainTicker2.x = 0;

// Start the marquee animation
playMarquee2(); // Renamed function call

// Main function that 'plays' the marquee in reverse
function playMarquee2() { // Renamed function
  // Set the increment of position x to move in reverse
  mainTicker2.x += 1.5; // Change -1.5 to +1.5

  // Settle position into the slider
  mainTicker2.settle(mainTicker2.x);

  // Set the requestId to the local variable
  requestId = window.requestAnimationFrame(playMarquee2); // Renamed function call
}
