const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
});

const ocultElements = document.querySelectorAll('.ocult');
ocultElements.forEach((el) => observer.observe(el));