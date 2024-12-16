// Use strict mode for better performance and error catching
"use strict";

// Main initialization function
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components with a single IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Unobserve after animation to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    }
  );

  // Observe all animated elements
  document
    .querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate"
    )
    .forEach((el) => observer.observe(el));

  // Initialize carousels if they exist
  const mainCarousel = document.getElementById("mainCarousel");
  if (mainCarousel) {
    new bootstrap.Carousel(mainCarousel, {
      interval: 5000,
      pause: "hover",
    });
  }

  const documentCarousel = document.getElementById("documentCarousel");
  if (documentCarousel) {
    new bootstrap.Carousel(documentCarousel, {
      interval: 4000,
      pause: "hover",
    });
  }

  // Optimize scroll event with throttling
  let lastScrollTime = 0;
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener(
      "scroll",
      () => {
        const now = Date.now();
        if (now - lastScrollTime > 100) {
          // Throttle to max 10 times per second
          lastScrollTime = now;
          navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
        }
      },
      { passive: true }
    );
  }

  // Event delegation for modal images
  document.addEventListener("click", (e) => {
    if (e.target.matches(".modal img")) {
      e.target.classList.toggle("zoomed");
    }
  });

  // Initialize tooltips and popovers only if needed
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltips.length) {
    tooltips.forEach((el) => new bootstrap.Tooltip(el));
  }

  const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
  if (popovers.length) {
    popovers.forEach((el) => new bootstrap.Popover(el));
  }

  // Smooth scroll with requestAnimationFrame
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / 500, 1);
          const ease = easeOutCubic(progress);

          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < 500) {
            requestAnimationFrame(animation);
          }
        }

        requestAnimationFrame(animation);
      }
    });
  });
});

// Easing function for smooth scroll
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
