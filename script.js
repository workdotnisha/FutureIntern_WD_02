document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

const proAll = document.querySelectorAll("#projects li");
document.querySelector("#projects").addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "A") {
    proAll.forEach((pro) => {
      pro.classList.remove("active");
    });
    target.parentElement.classList.add("active");
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//   emailjs.init('public_key');

//   const form = document.getElementById('contact-form');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const from_name = document.getElementById('name').value;
//     const from_email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (!from_name || !from_email || !message) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     const templateParams = {
//       from_name: from_name,
//       from_email: from_email,
//       message: message,
//     };

//     emailjs
//       .send('sevice_id', 'template_id', templateParams)
//       .then(() => {
//         alert('Message sent successfully!');
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//         alert('Failed to send message. Please try again later.');
//       });
//   });
// });


