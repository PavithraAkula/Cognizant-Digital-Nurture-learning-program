const events = [
  { name: "Community Jazz Night", date: "2025-06-10", seats: 5 },
  { name: "Art & Craft Fair", date: "2024-05-01", seats: 10 },
  { name: "Food Festival", date: "2025-07-15", seats: 0 },
  { name: "Coding Bootcamp", date: "2025-06-01", seats: 3 }
];

const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);

  if (eventDate > today && event.seats > 0) {
    console.log(`Event: ${event.name}, Date: ${event.date}, Seats: ${event.seats}`);
  } else {
    console.log(`Event "${event.name}" is not available.`);
  }
});

function register(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    
    const eventDate = new Date(event.date);
    if (eventDate <= today) throw new Error("Event already passed");
    if (event.seats <= 0) throw new Error("No seats available");

    event.seats--;
    console.log(`Successfully registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (error) {
    console.log(`Registration failed: ${error.message}`);
  }
}

register("Coding Bootcamp");
register("Food Festival");
register("Nonexistent Event");
