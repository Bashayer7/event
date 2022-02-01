const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  organizer: {
    type: String,
    unique: true,
    maxlength:20,
  },
  name: { type: String,
    this.name: $ignore('event') },

  email: {
    type: String,
    validate: {
      validator: () => Promise.resolve(false),
      message: "Email validation failed",
    },
  },
  image: { type: String ,validate: (value) => typeof value === "string"},
  numOfSeats: { type: Number },
  bookedSeats: { type: Number },
  startDate: { type: Date },
  endDate: { date: Date },
});

module.exports = mongoose.model("Event", EventSchema);
