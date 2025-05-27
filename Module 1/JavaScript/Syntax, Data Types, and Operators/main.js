const eventName = "Community Jazz Night";
const eventDate = "2025-06-10";
let availableSeats = 20;

console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

function registerSeat() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registration successful! Seats left: ${availableSeats}`);
  } else {
    console.log("Sorry, no seats available.");
  }
}

registerSeat();
registerSeat();
registerSeat();
