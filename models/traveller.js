const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
 return this.journeys.filter(journey => journey.transport === transport)
};

// Traveller.prototype.getJourneysByTransport = function (transport) {
//   const result = []
//   this.journeys.forEach((journey) => {
//     if (journey.transport === transport) {
//       result.push(journey)
//     }
//   })
//   return result
// };

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

// ================= Extensions ============
Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) =>{
    return total + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.reduce((transportList, journey) => {
    if (transportList.includes(journey.transport) == false) {
        transportList.push(journey.transport);
    }

    return transportList
  }, []);
};


module.exports = Traveller;
