// Sign up

function register() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    var exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


    // Data Validation

    if (username.value.length < 5) {
        username.style.border = "2px red solid";
        return;
    } else {
        username.style.border = "";
    }

    if (email.value.includes("@")) {
        email.style.border = "";
    } else {
        email.style.border = "2px red solid";
        return;
    }

    if (exp.test(pass.value) == false) {
        pass.style.border = "2px red solid";
        return;
    } else {
        pass.style.border = "";
    }


    // should put userdata in object to send it by local storage
    var userData = {
        name: username.value,
        email: email.value,
        password: pass.value
    }

    // connverts userdata(object) to string to set it into local storage
    var DataInString = JSON.stringify(userData)
    localStorage.setItem("Userinfo", DataInString)

    location.assign('signin.html')
}


// Sign in

function signin(event) {
    event.preventDefault();
    if (localStorage.getItem("Userinfo") != null) {
        var username = document.getElementById('username');
        var pass = document.getElementById('password');

        var getData = JSON.parse(localStorage.getItem("Userinfo"));

        if (username.value != getData.name) {
            alert('Invalid username')
            return;
        }
        if (pass.value != getData.password) {
            alert('Wrong Password')
            return;
        }

        location.assign("./home.html");
    }
    else {
        alert('Please Sign Up First')
        location.assign("register.html")
    }

}
