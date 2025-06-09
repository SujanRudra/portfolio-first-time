
function showSidebar() {
    /** @type {HTMLElement} */
    const sidebar = document.querySelector('.drawer');
    // const menu = document.querySelector('#threeline');
    if (sidebar) {
        sidebar.style.right = '0%';

    }
    else {
        console.error("Sidebar not found!");
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.drawer')
    sidebar.style.right = '-100%';
}

// function hideSidebarOnOutsideClick(event) {
//     const sidebar = document.querySelector('.drawer');

//     document.onclick = function (event) {
//         if (!sidebar.contains(event.target)) {
//             hideSidebar();
//         }
//     }

// }