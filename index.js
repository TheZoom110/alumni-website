window.onload = function() {
    widthFix();
    hamburger();
}

window.onscroll = function() {
    headerFix();
};


function widthFix() {
    var scrollWidth = window.innerWidth - document.documentElement.clientWidth
    document.getElementById("header").style.width = "calc(100vw - " + scrollWidth + "px)";
    document.getElementById("main").style.width = "calc(100vw - " + scrollWidth + "px)";
}

function hamburger() {
    let hambox = document.querySelector('.hambox');

    hambox.addEventListener('click', () => {
        document.querySelector('.ham').classList.toggle('cross');
        document.querySelector('.list').classList.toggle('ham-menu');
    })
}


function headerFix() {
    var imgHeight = document.documentElement.clientHeight *75/100;
    var headerHeight = document.getElementById("header").clientHeight;

    if (document.body.scrollTop > imgHeight-headerHeight || document.documentElement.scrollTop > imgHeight-headerHeight) {
        document.getElementById("header").style.background = "black";
    } else {
        document.getElementById("header").style.background = "transparent";
    }
}