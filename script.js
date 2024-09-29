let name = document.getElementById("name");
let e_mail = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let c_password = document.getElementById("c-password");


function submit_data() {

    if (name.value == "") {

        alert("Please Enter Your Full Name!");

    }

    else if (e_mail.value == "") {

        alert("Please Enter Your E-Mail Address!");

    }

    else if (number.value == "") {

        alert("Please Enter Your Mobile Number!");

    }

    else if (password.value == "") {

        alert("Please Enter Your Password!");

    }

    else if (c_password.value == "") {

        alert("Please Enter Your Confirm Password!");

    }

    else if (c_password.value !== password.value) {

        alert("Confirm Password Is Not Same As Password!");

    }

    else {

        console.log("CHECK LOCAL STORAGE!");

        localStorage.setItem("Name", name.value);
        localStorage.setItem("E-Mail", e_mail.value);
        localStorage.setItem("Number", number.value);
        localStorage.setItem("Password", password.value);
        localStorage.setItem("Confirm Password", c_password.value);

        name.value = "";
        e_mail.value = "";
        e_mail.value = "";
        number.value = "";
        password.value = "";
        c_password.value = "";

        alert("You Are Now Registered!");

    }

}