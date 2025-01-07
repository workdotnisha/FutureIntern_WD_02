# Portfolio Website

This repository contains the source code for my personal portfolio website. The website showcases my projects, skills, and provides a way to contact me through a contact form.

---

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Project Categories**: Projects are categorized (e.g., All, Frontend, Fullstack) with an active tab highlighting the selected category.
- **Dynamic Contact Form**: Uses EmailJS to send messages directly from the website.
- **Modern Design**: Built with HTML, CSS, and JavaScript to ensure a clean and professional look.

---


## Technologies Used

- **HTML5**: For the structure of the website.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For interactivity and dynamic features.
- **EmailJS**: For sending messages via the contact form.

---

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS file for styling
├── script.js           # JavaScript file for interactivity
├── images/             # Folder for images and icons
└── README.md           # Documentation
```

---

## How to Use

### Projects Section
- Click on the project categories (e.g., All, Frontend, Fullstack) to filter projects.
- Active categories are highlighted for better navigation.


### Contact Form
- Fill in the fields (Name, Email, and Message).
- Click the "Send" button to send your message.
- Ensure your EmailJS credentials are properly configured in the `script.js` file.

---

## Troubleshooting

### Common Issues:

1. **EmailJS Error: "This SDK version is unsupported"**
   - Update the EmailJS SDK by including the latest version from the CDN:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3.11.0/dist/email.min.js"></script>
     ```

2. **Null Value Errors**
   - Ensure all form fields have `id` attributes matching those referenced in `script.js` (e.g., `name`, `email`, `message`).

3. **Emails Not Sending**
   - Verify your EmailJS credentials: Service ID, Template ID, and Public Key.
   - Check your EmailJS dashboard for any configuration errors.

---

## Contact

Feel free to reach out if you have any questions or suggestions:
- **Email**: workedotnisha@gmail.com
- **GitHub**: [workdotnisha](https://github.com/workdotnisha)


