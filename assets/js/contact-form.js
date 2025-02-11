function sendEmail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    
    // Regular expression for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === "" || email === "" || subject === "" || message === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required!",
            confirmButtonColor: "#0087ad"
        });
        return;
    }
    
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid email address!",
            confirmButtonColor: "#0087ad"
        });
        return;
    }
    
    let parameters = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };
    

    function changeID(value) {
        return atob(value); 
    }
    
    let serviceID = changeID("c2VydmljZV9idTI3Ym5l"); 
    let templateID = changeID("dGVtcGxhdGVfdGxvaTV1cw");

    //sending email [functionality]
    emailjs.send(serviceID, templateID, parameters)
        .then(function(response) {
            Swal.fire({
                title: "Good job!",
                text: "Email sent successfully!",
                icon: "success",
                confirmButtonColor: "#0087ad"
            });
            document.getElementById("contactForm").reset(); // Reset the form
        }, function(error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                confirmButtonColor: "#0087ad"
            });
            console.error("EmailJS Error:", error);
        });
}
