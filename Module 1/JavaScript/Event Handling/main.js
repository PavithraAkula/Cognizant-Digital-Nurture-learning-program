const events = [
  { name: "Music Concert", category: "Music", date: "2025-06-05", seats: 10 },
  { name: "Art Workshop", category: "Art", date: "2025-06-10", seats: 5 },
  { name: "Tech Meetup", category: "Tech", date: "2025-06-15", seats: 8 },
  { name: "Jazz Night", category: "Music", date: "2025-06-20", seats: 0 },
];

const container = document.querySelector("#eventContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

let filteredEvents = [...events];

function renderEvents(eventsToRender) {
  container.innerHTML = "";

  eventsToRender.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid gray";
    card.style.padding = "10px";
    card.style.margin = "10px";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Available Seats: ${event.seats}`;

    const button = document.createElement("button");
    button.textContent = event.seats > 0 ? "Register" : "Full";
    button.disabled = event.seats === 0;

    button.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        applyFilters();
      }
    };

    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(button);

    container.appendChild(card);
  });
}

function applyFilters() {
  const selectedCategory = categoryFilter.value.toLowerCase();
  const searchTerm = searchInput.value.toLowerCase();

  filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "" || event.category.toLowerCase() === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderEvents(filteredEvents);
}


categoryFilter.onchange = () => {
  applyFilters();
};

searchInput.onkeydown = () => {
 
  setTimeout(applyFilters, 0);
};

renderEvents(events);
