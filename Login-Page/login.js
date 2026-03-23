function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function goToNextPage() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // ✅ Redirect to HOME PAGE (CORRECT WAY)
    window.location.href = "../home/home.html";
}