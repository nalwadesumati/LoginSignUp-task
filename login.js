const logOutBtn = document.getElementById("logOutBtn");


if (!localStorage.getItem("token")) {

    window.location.href = "index.html"
}

if (localStorage.getItem("isLogin")) {

    Swal.fire({

        title: "Login Successfully",
        icon: "success",
        timer: 1500
    })

    localStorage.removeItem("isLogin");
}


const onLogOut = () => {
    Swal.fire({
        title: "Logout Successfully",
        icon: "info",
        timer: 1500,
        showConfirmButton: false
    }).then(() => {

        localStorage.removeItem("token");
        localStorage.removeItem("userRole");


        window.location.href = "index.html";
    });
};



logOutBtn.addEventListener("click", onLogOut);


