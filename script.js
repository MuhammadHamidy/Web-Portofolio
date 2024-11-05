function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    let isValid = true;
    if (!name) {
        alert("Name is required.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        isValid = false;
    } else if (!message) {
        alert("Message is required.");
        isValid = false;
    }

    if (isValid) {
        const whatsappNumber = "6283808191352"; 
        const whatsappMessage = `Hello! Here are the details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

        const whatsappUrl = `https://wa.me/${6283808191352}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    }
}
