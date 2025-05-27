console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("Page is fully loaded");
};

// Mock data
let eventsList = [
  { name: "Music Night", category: "music", date: "2025-06-15", seats: 5 },
  { name: "Coding Bootcamp", category: "tech", date: "2025-07-10", seats: 0 },
  { name: "Dance Show", category: "music", date: "2025-08-01", seats: 10 },
];

// DOM elements
const eventsContainer = document.querySelector("#events");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");
const loading = document.querySelector("#loading");

// Functions
function displayEvents(events) {
  eventsContainer.innerHTML = "";
  events.forEach(event => {
    const today = new Date();
    const eventDate = new Date(event.date);
    if (eventDate < today || event.seats <= 0) return;

    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats Available: ${event.seats}</p>
      <button onclick="register('${event.name}')">Register</button>
    `;
    eventsContainer.appendChild(card);
  });
}

// Registration
function register(eventName) {
  const event = eventsList.find(e => e.name === eventName);
  try {
    if (event.seats <= 0) throw new Error("No seats left.");
    event.seats--;
    alert(`Registered for ${event.name}`);
    displayEvents(eventsList);
  } catch (err) {
    alert(err.message);
  }
}

// Form Handling
document.querySelector("#regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.elements["name"].value;
  const email = this.elements["email"].value;
  const selectedEvent = this.elements["event"].value;
  if (!name || !email) {
    document.querySelector("#error").textContent = "All fields are required.";
    return;
  }
  document.querySelector("#error").textContent = "";
  sendRegistration({ name, email, event: selectedEvent });
});

// Simulate API
function sendRegistration(data) {
  loading.style.display = "block";
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(() => alert("Registration submitted successfully!"))
      .catch(() => alert("Submission failed."))
      .finally(() => {
        loading.style.display = "none";
      });
  }, 1000);
}

// Filters
categoryFilter.onchange = () => {
  const selected = categoryFilter.value;
  const filtered = selected ? eventsList.filter(e => e.category === selected) : eventsList;
  displayEvents(filtered);
};

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.toLowerCase();
    const results = eventsList.filter(e => e.name.toLowerCase().includes(query));
    displayEvents(results);
  }
});

// Initial Load
displayEvents(eventsList);

// jQuery enhancements
$("#registerBtn").click(() => {
  alert("Registered using jQuery!");
});

$(".event-card").fadeIn();
