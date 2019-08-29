function reveal() {
    var bottom = document.getElementById("bottom");
    bottom.classList.toggle("revealed");
};

window.addEventListener("scroll", function() {
    var bottom = document.getElementById("bottom");
    if (bottom.classList.contains("revealed"))
        bottom.classList.remove("revealed");
});

window.addEventListener("click", function(event) {
    var bottom = document.getElementById("bottom");
    var toggler = document.getElementById("toggler");
    if (bottom.classList.contains("revealed")) {
        if (event.target != bottom && event.target != toggler)
            bottom.classList.remove("revealed");
    }
});