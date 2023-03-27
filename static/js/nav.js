// NAVIGATION MENU
// Wait for the page to finish loading
window.addEventListener('load', function () {
  // Get the toggle button and navbar links
  const toggleButton = document.querySelector('.toggle');
  const navbarLinks = document.querySelector('.links');

  // Add a click event listener to the toggle button
  toggleButton.addEventListener('click', function () {
    // Toggle the 'active' class on the navbar links
    navbarLinks.classList.toggle('active');
  });
});