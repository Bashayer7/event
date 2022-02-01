// let events=require("../events")

const Event = require("../../db/model/Event");
//out from controler to events to apis
//  then to db then model then event
exports.fetchEvents = (req, res) => {
  try {
    const newEvents = await.Event.find();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.fetchEvents = (req, res) => {
  try {
    const foundEvents = await.Event.findById({ _id: eventId });
    if (foundEvents) {
      res.status(204).end();
    } else {
      res.status(500).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateEvents = async (req, res) => {
  try {
    const { eventId } = req.params;
    const e = await Event.findByIdAndUpdate({ id: eventId }, req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createEvents = async (req, res) => {
  try {
    const newEvents = await Event.create(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteEvents = async (req, res) => {
  const eventid = req.params.eventId;
  try {
    const foundEvent = await Event.findByIdAndDelete(eventid);
    if (foundEvent) {
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
