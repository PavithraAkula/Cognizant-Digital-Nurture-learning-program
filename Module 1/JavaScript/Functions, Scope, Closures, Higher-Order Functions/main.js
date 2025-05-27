const events = [];

function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

function createCategoryTracker() {
  const registrations = {};

  return function (category) {
    if (!registrations[category]) {
      registrations[category] = 1;
    } else {
      registrations[category]++;
    }
    console.log(`Registrations in "${category}": ${registrations[category]}`);
  };
}

const trackRegistration = createCategoryTracker();

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) {
    console.log("Event not found");
    return;
  }

  const eventDate = new Date(event.date);
  const today = new Date();

  if (eventDate <= today) {
    console.log("Event already passed");
    return;
  }

  if (event.seats <= 0) {
    console.log("No seats available");
    return;
  }

  event.seats--;
  console.log(`Successfully registered for ${event.name}. Seats left: ${event.seats}`);
  trackRegistration(event.category);
}

function filterEventsByCategory(category) {
  return events.filter(e => e.category === category);
}

function filterEvents(callback) {
  return events.filter(callback);
}

addEvent("Coding Bootcamp", "2025-06-01", 3, "Education");
addEvent("Yoga Session", "2025-06-05", 10, "Wellness");
addEvent("Jazz Night", "2025-06-10", 5, "Entertainment");
addEvent("Food Carnival", "2025-05-25", 0, "Food");

registerUser("Coding Bootcamp");
registerUser("Jazz Night");
registerUser("Jazz Night");

const educationEvents = filterEventsByCategory("Education");
console.log("Education Events:", educationEvents);

const upcomingEvents = filterEvents(e => new Date(e.date) > new Date() && e.seats > 0);
console.log("Upcoming Events with seats:", upcomingEvents);
