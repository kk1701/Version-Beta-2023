
// Function to hide the navigation menu on mobile
function hideNavMenu() {
  var checkbox = document.getElementById("check");
  if (window.innerWidth <= 768) {
    // Check if the screen width is less than or equal to 768px (adjust as needed)
    checkbox.checked = false; // Uncheck the checkbox to hide the menu
  }
}

// Add event listeners to the navigation links
var navLinks = document.querySelectorAll(".snip1189 li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", hideNavMenu);
  if (checkbox.checked == true) {
    navLinks[i].addEventListener("click", ()=>{
      checkbox.checked = false;
    })
  }
  }



// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Function to scroll to the ABOUT section
function scrollToAbout() {
  var aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Function to scroll to the SCHEDULE section
function scrollToSchedule() {
  var scheduleSection = document.getElementById("schedule_heading");
  scheduleSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Function to scroll to the PRIZES section
function scrollToPrizes() {
  var prizesSection = document.getElementById("prizes_heading");
  prizesSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Function to scroll to the GALLERY section
function scrollToGallery() {
  var gallerySection = document.getElementById("gallery_heading");
  gallerySection.scrollIntoView({
    behavior: "smooth"
  });
}

// Function to scroll to the SPONSORS section
function scrollToSponsor() {
  var sponsorsSection = document.getElementById("sponsor_heading");
  sponsorsSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Function to scroll to the FAQS section
function scrollToFaq() {
  var faqSection = document.getElementById("faq_heading");
  faqSection.scrollIntoView({
    behavior: "smooth"
  });
}

function hideOptions() {
  const checkbox = document.getElementById('check');
  if (checkbox.checked) {
      checkbox.checked = false;
  }
}


