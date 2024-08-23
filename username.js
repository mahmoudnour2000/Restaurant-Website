var btnout = document.querySelector('#btnout');

function userName() {
    var btn1 = document.querySelector('.button1');
    var btn = document.querySelector('.button');
    /*  */
    if (localStorage.getItem("Userinfo") != null) {
        btn1.style.display = 'none';
        btn.style.display = 'none';
        document.getElementById('welcome').innerText = 'Welcome ' + JSON.parse(localStorage.getItem("Userinfo")).
            name.split(" ")[0];
        btnout.style.display = 'block';

    } else {
        btn1.style.display = 'block';
        btn.style.display = 'block';
        btnout.style.display = 'none';
    }
}

function logOut() {
    localStorage.removeItem("Userinfo");
    location.assign("./home.html")
}

