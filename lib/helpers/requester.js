var request = require("request-promise");
var config = require("../config");

module.exports = {
	getTravelDates: function(route) {
		return request(config.API_URL + "journeys/travel-dates", {
			qs: {
				originCityId: route.originId,
				destinationCityId: route.destinationId
			}
		})
			.then(JSON.parse);
	},
	getJourneys: function(cfg) {
		return request({
				url: config.API_URL + "journeys",
				qs: {
					originId: cfg.route.originId,
					destinationId: cfg.route.destinationId,
					departureDate: cfg.date,
					totalPassengers: cfg.totalPassengers,
					concessionCount: 0,
					nusCount: 0,
					days: 1
				}
			})
			.then(JSON.parse)
			.catch(function(err) {
				if(err.statusCode == 500) {
					console.error("Overwhelmed Megabus. Adding timeout");
				}
				return { err: err, date: err.options.qs.departureDate };
			});
	}
};
