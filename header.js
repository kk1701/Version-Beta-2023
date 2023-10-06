
  // Function to hide the navigation menu on mobile
  function hideNavMenu() {
    var checkbox = document.getElementById("check");
    if (window.innerWidth <= 768) {
      // Check if the screen width is less than or equal to 768px (adjust as needed)
      checkbox.checked = false; // Uncheck the checkbox to hide the menu
    }
  }

  // Add event listeners to the navigation links
  var navLinks = document.querySelectorAll("ul.snip1189 li a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", hideNavMenu);
  }

  // Function to scroll to the top (you can define scrollToTop, scrollToAbout, etc., functions)
  
  // Define other scrollTo functions similarly


