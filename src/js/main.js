AOS.init();

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 1500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 70, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function (anchor, toggle) { } // Function to run after scrolling
});