const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.classList.add("active");
    } else {
        scrollToTopBtn.classList.remove("active");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



  // Get the progress bar
var progressBar = document.getElementById("myBar");

// When the user scrolls the page, update the progress bar width
window.onscroll = function() {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progressWidth = (scrollPos / totalHeight) * 100;
  progressBar.style.width = progressWidth + "%";
};

  
  
  
  