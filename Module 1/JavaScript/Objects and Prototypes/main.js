function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function () {
  const today = new Date();
  const eventDate = new Date(this.date);
  return eventDate > today && this.seats > 0;
};

const event1 = new Event("Startup Pitch", "2025-06-15", 10, "Business");
const event2 = new Event("Cooking Class", "2025-05-20", 0, "Lifestyle");
const event3 = new Event("Music Festival", "2025-06-10", 5, "Entertainment");

const events = [event1, event2, event3];

events.forEach(event => {
  const isAvailable = event.checkAvailability();
  console.log(`Event: ${event.name}, Available: ${isAvailable}`);
  
  const entries = Object.entries(event);
  entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log("---");
});
