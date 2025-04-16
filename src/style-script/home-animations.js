document.getElementById("enterSite").addEventListener("click", function() {
    document.getElementById("intro").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
    }, 1000);
});

document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
