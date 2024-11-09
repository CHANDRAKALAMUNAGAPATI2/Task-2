// Add Image to Gallery
document.getElementById('addImageBtn').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrlInput').value;
    if (imageUrl) {
        const galleryContainer = document.getElementById('galleryContainer');
        const newImage = document.createElement('img');
        newImage.src = imageUrl;
        newImage.alt = 'Train Image';
        galleryContainer.appendChild(newImage);
        document.getElementById('imageUrlInput').value = ''; // Clear the input
    } else {
        alert('Please enter a valid image URL.');
    }
});
// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});


// To-Do List - Add and Remove Tasks
document.getElementById('addTodoBtn').addEventListener('click', function() {
    const taskText = document.getElementById('todoInput').value;
    if (taskText) {
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
        todoList.appendChild(listItem);
        document.getElementById('todoInput').value = ''; // Clear the input
    } else {
        alert('Please enter a task.');
    }
});

function removeTask(button) {
    button.parentElement.remove();
}
document.getElementById("booking").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form field values
    const departureId = document.getElementById("departure").value;
    const arrivalId = document.getElementById("arrival").value;
    const departureDate = document.getElementById("departureDate").value;
    const ticketType = document.getElementById("ticketType").value;

    // Validate required fields
    if (!departure || !arrival || !departureDate || !ticketType) {
        alert("Please fill in all required fields.");
        return;
    }

    // Optional: Validate that departureDate is in the future (if needed)
    const today = new Date();
    const selectedDate = new Date(departureDate);
    if (selectedDate < today) {
        alert("Please select a future departure date.");
        return;
    }

    // If all validations pass, show success message and reset form
    document.getElementById("confirmationMessage").style.display = "block"; // Show success message

    // Clear the form fields
    document.getElementById("booking").reset();
    
    // Optionally hide the success message after a few seconds (e.g., 3 seconds)
    setTimeout(function() {
        document.getElementById("confirmationMessage").style.display = "none";
    }, 3000);
});
