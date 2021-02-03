// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
export function StickyHeader() {
    // Get the header
    var header = document.getElementById("main-menu-container");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}