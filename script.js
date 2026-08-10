let age = "29";

if (age.length !== 2) {
    alert("Age should contain exactly 2 digits.");
}

console.log(age);

function confirmReset() {
    return confirm("Do you really want to reset the form?");
}

function checkEmail() {
    let email = document.getElementById("email").value;

    if (!email.includes(".com")) {
        alert("Email must contain .com");
        return false;
    }

    return true;
}

function savePDF(event) {
    event.preventDefault(); 
    window.print();          
}


