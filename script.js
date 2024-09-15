var btn = document.querySelectorAll(".btn")
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        var next = this.nextElementSibling
        if (next.style.display === "none") {
            next.style.display = "block";
        }
        else {
            next.style.display = "none"
        }

    })
}