// Language Switcher
document.addEventListener("DOMContentLoaded", function () {
  // Language form submission
  const langForm = document.getElementById("language-form");
  if (langForm) {
    const langInputs = langForm.querySelectorAll('input[type="submit"]');
    langInputs.forEach((input) => {
      input.addEventListener("click", function (e) {
        e.preventDefault();
        langForm.submit();
      });
    });
  }

  // Bootstrap Carousel Configuration
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

  // Initialize all tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize all popovers
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar scroll behavior
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }

  // Modal image zoom
  const modalImages = document.querySelectorAll(".modal img");
  modalImages.forEach((img) => {
    img.addEventListener("click", function () {
      this.classList.toggle("zoomed");
    });
  });

  // Product filter (if exists)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productItems = document.querySelectorAll(".product-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      productItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
