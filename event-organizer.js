let fs = require("fs");
let csvData = "EventName,NumberEventsRecorded\n";
let eventNames = [];
let parsedEvents = [];
const https = require("https");
const url =
  "https://my-json-server.typicode.com/adubrock/json-server-test/events";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
      body.forEach(function(event) {
        if (eventNames.includes(event.event_name)) {
          var foundIndex = parsedEvents.findIndex(x => x.event_name == event.event_name);
          parsedEvents[foundIndex].num_of_events = (parsedEvents[foundIndex].num_of_events + event.num_of_events);
        } else {
          parsedEvents.push({
            event_name: event.event_name,
            num_of_events: event.num_of_events
          })
          eventNames.push(event.event_name)
        }
      });
    parsedEvents.forEach(function(event) {
      csvData +=
          `${event.event_name},` +
          `${event.num_of_events}\n`;
      });
    fs.writeFile('TotalEvents.csv', csvData, 'utf8', function (err) {
      if (err) {
        console.log('An error occured - your csv file either did not save or a corrupted file was saved.');
      } else{
        console.log('Your events csv file (TotalEvents.csv) has been saved to the current directory!');
      }
    });
  });
});
