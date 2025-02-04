function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the "open" class to show/hide the menu and change icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

