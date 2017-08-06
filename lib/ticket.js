var moment = require("moment");
var config = require("./config");

function Ticket(data) {
	this.origin = data.origin;
	this.destination = data.destination;
	this.date = data.date;
	this.departureTime = data.departureDateTime;
	this.arrivalTime = data.arrivalDateTime;
	this.price = data.price;
	this.duration = data.duration;
	this.journeyId = data.journeyId;
}

Ticket.prototype.toString = function() {
	return "[" + this.date.format(config.LONG_DATE_FORMAT) + "]   " + "(" +
	this.departureTime.format(config.TIME_FORMAT) + " - " + this.arrivalTime.format(config.TIME_FORMAT) +
	")   $" + this.price;
};

module.exports = Ticket;