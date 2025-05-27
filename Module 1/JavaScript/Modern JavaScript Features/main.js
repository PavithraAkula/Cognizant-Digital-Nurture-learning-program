const events = [
  { name: "Music Concert", category: "Music", date: "2025-06-05", seats: 10 },
  { name: "Art Workshop", category: "Art", date: "2025-06-10", seats: 5 },
  { name: "Tech Meetup", category: "Tech", date: "2025-06-15", seats: 8 },
];

const cloneEvents = [...events];

const filterEvents = (eventList = cloneEvents, category = "") => {
  return eventList.filter(({ category: cat }) =>
    category === "" ? true : cat.toLowerCase() === category.toLowerCase()
  );
};

const displayEvents = (eventList = cloneEvents) => {
  eventList.forEach(({ name, category, date, seats }) => {
    console.log(`${name} | Category: ${category} | Date: ${date} | Seats: ${seats}`);
  });
};

const register = (event, seatsToBook = 1) => {
  let { seats } = event;
  if (seats >= seatsToBook) {
    event.seats -= seatsToBook;
    return `Registered for ${event.name}. Seats left: ${event.seats}`;
  }
  return `Not enough seats for ${event.name}`;
};


const musicEvents = filterEvents(cloneEvents, "music");
displayEvents(musicEvents);
console.log(register(musicEvents[0]));
