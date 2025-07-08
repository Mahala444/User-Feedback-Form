User Feedback Form

An interactive web-based feedback tool built with HTML, CSS, and JavaScript. It captures user input, displays tooltips, validates form fields, tracks character count, and appends feedback entries dynamically.


Features: 

Dynamic Tooltips
Tooltips appear when the user hovers over input fields, implemented using event delegation.

Live Character Counter
The comments field updates a character count in real time as the user types.

Form Validation
Prevents form submission if any field is empty, with inline error messages displayed.

Feedback Display
Valid feedback entries are appended below the form dynamically after successful submission.

Event Bubbling & Delegation
Input event handling is centralized using delegation to improve performance and maintainability.

Click Propagation Control
Uses stopPropagation() to ensure clicks outside the form don’t interfere with form logic.


Project Structure

index.html: The main HTML structure for the form and feedback display.

style.css: Styling and layout rules for the form and output.

cp_1.js: JavaScript for event handling, validation, dynamic rendering, and tooltip logic.
