let red_screen = false;

function closeWarning() {
    document.getElementById("warn-popup").style.display = "none";
    desktop = document.getElementsByClassName("desktop")
    desktop[0].style.display = "grid";
}

function openWindow(clicked_id) {
    document.getElementById("large-popup").style.display = "grid";
    img = document.getElementById("large-img")
    if (red_screen) {
    }
    else {
        if (clicked_id == "img-1") {
            img.style.scale = 0.5
            img.src = "images/art/win_1.png";
        }
        else if (clicked_id == "img-2") {
        }
        else {
        }
    }
}

function closeWindow() {
    document.getElementById("large-popup").style.display = "none";
}