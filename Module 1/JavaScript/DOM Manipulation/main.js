const events = [
  { name: "Music Concert", date: "2025-06-05", seats: 10 },
  { name: "Art Workshop", date: "2025-06-10", seats: 5 },
  { name: "Coding Bootcamp", date: "2025-06-15", seats: 0 }
];


const container = document.querySelector("#eventContainer");

function renderEvents() {
  container.innerHTML = ""; 

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid gray";
    card.style.padding = "10px";
    card.style.margin = "10px";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Available Seats: ${event.seats}`;

    const button = document.createElement("button");
    button.textContent = event.seats > 0 ? "Register" : "Full";
    button.disabled = event.seats === 0;

    button.addEventListener("click", () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(); 
      }
    });

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(button);
    container.appendChild(card);
  });
}

renderEvents();
