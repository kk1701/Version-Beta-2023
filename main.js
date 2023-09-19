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

// smooth scroll
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToAbout() {
  window.scrollTo({ top: 760, behavior: "smooth" });
}

function scrollToSchedule() {
  window.scrollTo({ top: 1430, behavior: "smooth" });
}

function scrollToPrizes() {
  window.scrollTo({ top: 2500, behavior: "smooth" });
}

function scrollToFaq() {
  window.scrollTo({ top: 5670, behavior: "smooth" });
}

function scrollToGallery() {
  window.scrollTo({ top: 3270, behavior: "smooth" });
}

function scrollToSponsor() {
  window.scrollTo({ top: 4800, behavior: "smooth" });
}

// faqs
const faqItems = document.querySelectorAll('.faq');


// Add click event listeners to each question
faqItems.forEach((item) => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer_faq');
  const faqArrows = item.querySelector('.question_arrow');

  question.addEventListener('click', () => {
    // Toggle the visibility of the answer
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }

    // Hide all other answers
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.querySelector('.answer_faq');
        otherAnswer.style.display = 'none';
      }
    });
  });
});

