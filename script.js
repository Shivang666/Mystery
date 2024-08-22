function checkAnswers() {
    const answer1 = document.getElementById("q1").value.toLowerCase();
    const answer2 = document.getElementById("q2").value.toLowerCase();
    const answer3 = document.getElementById("q3").value.toLowerCase();

    if (answer1 === "brahma kamal" && answer2 === "football" && answer3 === "lap") {
        document.getElementById("questions-section").style.display = "none";
        document.getElementById("password-section").style.display = "block";
    } else {
        alert("Oops! Some answers are incorrect. Please try again.");
    }
}

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "19/03/2024") {
        document.getElementById("password-section").style.display = "none";
        document.getElementById("gift-section").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
