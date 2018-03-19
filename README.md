# event-organizer

The Event Organizer pulls a mock db of events posted on my JSON server, adds together all events of each unique 'Event Name', then writes a csv file within the project directory that shows each Event Name along with its total number of events:

a)	Event name
b)	Number of events recorded

The mock db is posted in this github project: https://github.com/adubrock/json-server-test
The db can be viewed on My JSON server at this URL: https://my-json-server.typicode.com/adubrock/json-server-test/

To run the app:
* clone this repo
* go into the project folder and run the js file (`node event-organizer.js`)
* A TotalEvents.csv file will be written in the project folder with the above itemized events.
