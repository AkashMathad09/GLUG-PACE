  document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    let isScrolling = false;
    let scrollTimer;

    // Hide when scrolling starts
    window.addEventListener('scroll', function() {
      if (!isScrolling) {
        isScrolling = true;
        scrollDown.classList.add('hide');
      }
      
      // Clear any existing timeout
      clearTimeout(scrollTimer);
      
      // Show again if user returns to top
      scrollTimer = setTimeout(function() {
        if (window.pageYOffset === 0) {
          isScrolling = false;
          scrollDown.classList.remove('hide');
        }
      }, 100);
    });

    // Optional: Smooth scroll when clicked
    scrollDown.addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth'
      });
    });
  });