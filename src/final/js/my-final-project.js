// Handle user registration
document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`User Registered: ${username}, Email: ${email}`);
    alert('Registration successful! Welcome, ' + username + '!');
});

// Handle habit creation
document.getElementById('add-habit').addEventListener('click', () => {
    const habitName = document.getElementById('habit-name').value;
    if (habitName.trim()) {
        const habitList = document.getElementById('habit-list');
        const listItem = document.createElement('li');
        listItem.textContent = habitName;
        habitList.appendChild(listItem);
        document.getElementById('habit-name').value = ''; // Clear input field
    } else {
        alert('Please enter a valid habit name.');
    }
});
