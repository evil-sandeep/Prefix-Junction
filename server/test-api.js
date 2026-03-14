fetch('http://localhost:5000/api/book-slot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    service: "Full Grooming",
    date: "2024-03-20",
    slot: "10:00 AM"
  }),
})
.then(response => response.json())
.then(data => console.log('Response:', data))
.catch((error) => console.error('Error:', error));
