function pfexpand() {
    var p = document.getElementById("pf-nav-list");
    p.style.display = (p.style.display === "inline" ? "none" : "inline");

    var s = document.getElementById("pf-nav-list-secondary");
    s.style.display = (s.style.display === "flex" ? "none" : "flex");
}

var smallWindow = window.innerWidth <= 767
window.addEventListener("resize", () => {
    if (smallWindow && window.innerWidth > 767) {
        smallWindow = false;
        document.getElementById("pf-nav-list").style.display = "inline";
        document.getElementById("pf-nav-list-secondary").style.display = "flex";

        document.getElementById("pf-footer-top").style.display = "auto";
        document.getElementById("pf-footer-bottom").style.display = "none";
    } else if (!smallWindow && window.innerWidth <= 767) {
        smallWindow = true;
        document.getElementById("pf-nav-list").style.display = "none";
        document.getElementById("pf-nav-list-secondary").style.display = "none";

        document.getElementById("pf-footer-top").style.display = "none";
        document.getElementById("pf-footer-bottom").style.display = "auto";
    }
});

window.addEventListener("load", (_) => {
    if (smallWindow) {
        document.getElementById("pf-nav-list").style.display = "none";
        document.getElementById("pf-nav-list-secondary").style.display = "none";
    }
});
