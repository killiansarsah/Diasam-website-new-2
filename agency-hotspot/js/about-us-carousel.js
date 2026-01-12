/* ===================================
    DiaSam About Us - Team Carousel
====================================== */

// Team carousel state and configuration
let currentTeamIndex = 0;
let autoRotateInterval = null;
const AUTO_ROTATE_DELAY = 4000; // 4 seconds

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeTeamCarousel();
});

/**
 * Initialize the team member carousel
 */
function initializeTeamCarousel() {
  // Only initialize if mobile carousel exists
  const mobileCarousel = document.querySelector('.team-cards-mobile');
  if (!mobileCarousel || window.getComputedStyle(mobileCarousel).display === 'none') {
    return;
  }

  // Setup dot click listeners
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      goToTeamMember(index);
      
      // Reset auto-rotate timer when user manually clicks
      resetAutoRotate();
    });

    // Keyboard accessibility
    dot.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Start auto-rotation
  startAutoRotate();

  // Pause auto-rotation when page is hidden
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopAutoRotate();
    } else {
      startAutoRotate();
    }
  });

  // Stop auto-rotation on window resize to desktop
  window.addEventListener('resize', function() {
    const isDesktop = window.getComputedStyle(mobileCarousel).display === 'none';
    if (isDesktop) {
      stopAutoRotate();
    } else {
      if (!autoRotateInterval) {
        startAutoRotate();
      }
    }
  });
}

/**
 * Navigate to a specific team member
 * @param {number} index - Index of the team member to show
 */
function goToTeamMember(index) {
  const cards = document.querySelectorAll('.carousel-card');
  const dots = document.querySelectorAll('.carousel-dot');

  if (index < 0 || index >= cards.length) {
    return;
  }

  // Update current index
  currentTeamIndex = index;

  // Hide all cards and remove active state from all dots
  cards.forEach((card, i) => {
    if (i === index) {
      // Show target card with fade in
      card.style.display = 'flex';
      // Force reflow to ensure transition works
      card.offsetHeight;
      card.style.opacity = '1';
    } else {
      // Fade out other cards
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.display = 'none';
      }, 500); // Match transition duration
    }
  });

  // Update dot indicators
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
      dot.setAttribute('aria-current', 'true');
    } else {
      dot.classList.remove('active');
      dot.removeAttribute('aria-current');
    }
  });
}

/**
 * Advance to the next team member
 */
function nextTeamMember() {
  const cards = document.querySelectorAll('.carousel-card');
  const nextIndex = (currentTeamIndex + 1) % cards.length;
  goToTeamMember(nextIndex);
}

/**
 * Start auto-rotation timer
 */
function startAutoRotate() {
  // Clear any existing interval
  stopAutoRotate();

  // Start new interval
  autoRotateInterval = setInterval(() => {
    nextTeamMember();
  }, AUTO_ROTATE_DELAY);
}

/**
 * Stop auto-rotation timer
 */
function stopAutoRotate() {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
    autoRotateInterval = null;
  }
}

/**
 * Reset auto-rotation timer (used when user manually interacts)
 */
function resetAutoRotate() {
  stopAutoRotate();
  startAutoRotate();
}

// Clean up on page unload
window.addEventListener('beforeunload', function() {
  stopAutoRotate();
});
