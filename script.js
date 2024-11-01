let red_screen = false;

function closeWarning() {
    document.getElementById("warn-popup").style.display = "none";
    desktop = document.getElementsByClassName("desktop")
    desktop[0].style.display = "grid";
}

function openWindow(clicked_id) {
    document.getElementById("large-popup").style.display = "grid";
    img = document.getElementById("large-img");
    if (red_screen) {
        if (clicked_id == "img-1") {
            img.style.scale = 0.23;
            img.src = "images/art/large-imgs-red.png";
        }
        else if (clicked_id == "img-2") {
            img.style.scale = 0.23;
            img.src = "images/art/large-imgs-2-red.png";
        }
        else if (clicked_id == "img-3") {
            img.style.scale = 0.23;
            img.src = "images/art/large-imgs-3-red.png";
        }
    }
    else {
        if (clicked_id == "img-1") {
            img.style.scale = 0.23;
            img.src = "images/art/large-imgs.png";
        }
        else if (clicked_id == "img-2") {
            img.style.scale = 0.23;
            img.src = "images/art/large-imgs-2.png";
        }
        else if (clicked_id == "img-3") {
            img.style.scale = 0.23;
            img.src = "images/art/large-imgs-3.png";
        }
    }
}

function closeWindow() {
    document.getElementById("large-popup").style.display = "none";
}

function openPassword() {
    if (red_screen) {
    }
    else {
        document.getElementById("password-win").style.display = "grid";
    }
}

function checkPassword() {
    user_input = document.getElementById("password").value;
    if (user_input.toLowerCase() == "einya") {
        red_screen = true;
        desktop = document.getElementsByClassName("desktop");
        desktop[0].style.backgroundImage = 'url("images/art/red_desktop.png")';
        document.getElementById("date").style.visibility = "hidden";
        document.getElementById("win-1").src = "images/art/win_1_red.png";
        document.getElementById("win-2").src = "images/art/win_2_red.png";
        document.getElementById("win-3").src = "images/art/win_3_red.png";
        popup = document.getElementsByClassName("large-popup");
        popup[0].style.backgroundImage = 'url("images/art/large_win_red.png")';
        closePassword();
    }
    else {
        document.getElementById("pass-hint").innerHTML = "INCORRECT PASSWORD";
    }
}

function closePassword() {
    document.getElementById("password-win").style.display = "none";
    document.getElementById("pass-hint").innerHTML = "hint: what is my friend's name?";
}