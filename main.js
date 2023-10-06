// Pre Loader

// document.addEventListener("DOMContentLoaded", function () {
//   const timeoutDuration = 4000;

//   setTimeout(function () {
//     const preloader = document.getElementById("preloader");
//     if (preloader) {
//       preloader.style.display = "none";
//     }
//   }, timeoutDuration);
// });

// Function to hide the preloader
function hidePreloader() {
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
  document.body.classList.add('loaded');
}

// Set a timeout of 8 seconds (8000 milliseconds) to hide the preloader
setTimeout(hidePreloader, 8000);


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

