document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");
  const inputs = form.querySelectorAll("input, textarea");
  const feedbackDisplay = document.getElementById("feedback-display");
  const charCount = document.getElementById("char-count");

  // Tooltips
  const tooltips = {
    username: document.getElementById("username-tooltip"),
    email: document.getElementById("email-tooltip"),
    comments: document.getElementById("comments-tooltip"),
  };

  // Event delegation for input fields
  form.addEventListener("mouseover", (e) => {
    if (e.target.id in tooltips) {
      tooltips[e.target.id].style.display = "inline";
    }
  });

  form.addEventListener("mouseout", (e) => {
    if (e.target.id in tooltips) {
      tooltips[e.target.id].style.display = "none";
    }
  });

  // Character count
  const commentsField = document.getElementById("comments");
  commentsField.addEventListener("input", () => {
    charCount.textContent = `Characters: ${commentsField.value.length}`;
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const comments = commentsField.value.trim();

    // Clear previous error messages
    form.querySelectorAll(".error").forEach(el => el.remove());

    let hasError = false;

    if (!username) {
      showError("username", "Name is required");
      hasError = true;
    }

    if (!email) {
      showError("email", "Email is required");
      hasError = true;
    }

    if (!comments) {
      showError("comments", "Comments cannot be empty");
      hasError = true;
    }

    if (!hasError) {
      const entry = document.createElement("div");
      entry.innerHTML = `
        <p><strong>${username}</strong> (${email})</p>
        <p>${comments}</p>
        <hr>
      `;
      feedbackDisplay.appendChild(entry);
      form.reset();
      charCount.textContent = "Characters: 0";
    }
  });

  function showError(id, message) {
    const el = document.getElementById(id);
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = message;
    el.parentElement.appendChild(error);
  }

  // Prevent background clicks from triggering form-related events
  document.body.addEventListener("click", () => {
    // Potential background event
    console.log("Background clicked");
  });

  form.addEventListener("click", function (e) {
    e.stopPropagation(); // Stop event from bubbling to body
  });
});
