// Add this JavaScript code to your Jekyll project, preferably in a separate .js file

document.addEventListener("DOMContentLoaded", function() {
    // Get the element representing the "Teaching" menu item
    var teachingMenuItem = document.querySelector('a[href="/teaching"]');

    // Check if the element exists
    if (teachingMenuItem) {
        // Add a click event listener to the "Teaching" menu item
        teachingMenuItem.addEventListener("click", function(event) {
            // Prevent the default behavior of the link (i.e., navigating to "/teaching")
            event.preventDefault();

            // Redirect the user to the specified external URL
            window.location.href = "https://manika-lamba.gitbook.io/courses";
        });
    }
});
