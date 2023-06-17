

var xstatus = false;

function showHideMenu() {
    var menu = document.getElementById("daftarMenu");
    if (xstatus) {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
        xstatus = false;
    } else {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        menu.classList.add('bg-white')
        xstatus = true;
    }
    console.log(xstatus);
}

window.onscroll = function () { menu() };
var xstatus = false;

function menu() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById('header').classList.add
            ('bg-white');
        document.getElementById('header').classList.add
            ('shadow-lg');
    } else {
        document.getElementById('header').classList.add('bg-white');
        document.getElementById('header').classList.remove('shadow-lg')
    }
}


function goClick() {
    window.location.href = "/public/home.html"
}

function projects() {
    document.getElementById('skill').classList.remove('flex');
    document.getElementById('skill').classList.add('hidden');
    document.getElementById('projects').classList.remove('hidden');
    document.getElementById('projects').classList.add('flex');
    


}

function skill() {
    document.getElementById('projects').classList.remove('flex');
    document.getElementById('projects').classList.add('hidden');
    document.getElementById('skill').classList.remove('hidden');
    document.getElementById('skill').classList.add('flex');
}