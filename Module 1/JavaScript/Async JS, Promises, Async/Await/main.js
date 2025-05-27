const eventContainer = document.querySelector("#eventContainer");
const loading = document.querySelector("#loading");

function renderEvents(events) {
  eventContainer.innerHTML = "";
  events.forEach(event => {
    const div = document.createElement("div");
    div.textContent = `${event.name} (${event.category}) - Seats: ${event.seats}`;
    eventContainer.appendChild(div);
  });
}

function fetchEventsThen() {
  loading.style.display = "block";
  fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    .then(response => {
      if (!response.ok) throw new Error("Network response not ok");
      return response.json();
    })
    .then(data => {
      loading.style.display = "none";
      renderEvents(data);
    })
    .catch(error => {
      loading.style.display = "none";
      eventContainer.textContent = `Error loading events: ${error}`;
    });
}

async function fetchEventsAsync() {
  loading.style.display = "block";
  try {
    const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    if (!response.ok) throw new Error("Network response not ok");
    const data = await response.json();
    renderEvents(data);
  } catch (error) {
    eventContainer.textContent = `Error loading events: ${error}`;
  } finally {
    loading.style.display = "none";
  }
}

fetchEventsAsync();
