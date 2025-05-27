const events = [];

events.push(
  { name: "Workshop on Baking", date: "2025-06-05", seats: 20, category: "Music" },
  { name: "Tech Meetup", date: "2025-06-10", seats: 15, category: "Technology" },
  { name: "Live Band Night", date: "2025-06-15", seats: 30, category: "Music" },
  { name: "Art Exhibition", date: "2025-06-20", seats: 10, category: "Art" }
);

const musicEvents = events.filter(event => event.category === "Music");

const eventCards = musicEvents.map(event => `Music Event: ${event.name}`);

console.log("All Music Events:");
eventCards.forEach(card => console.log(card));
