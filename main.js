// Pre Loader
document.addEventListener("DOMContentLoaded", function () {
    const timeoutDuration = 4000;

    setTimeout(function () {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    }, timeoutDuration);
});

// Bottom to Top
window.addEventListener("scroll", toggleGoToTopButton);

function toggleGoToTopButton() {
  const goToTopButton = document.getElementById("go-top-btn");
  if (window.scrollY >= 300) {
    goToTopButton.classList.remove("hidden");
  } else {
    goToTopButton.classList.add("hidden");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}






