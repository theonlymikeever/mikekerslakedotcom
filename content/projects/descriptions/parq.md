An application to tag, label and find open parking spots within NYC, in real time, as well as validate spots against local parking laws. Application is integrated with data from NYC DOT.

- Developed with the NERDS stack (Node, Express, React w/ Redux, PostgreSQL), Mapbox JS, AWS, Socket.io, D3, & Google’s Map API
- Draggable and flexible map markers, indicating when a spot was last reported
- Ability to upload an image of the parking space
- Spots are analyzed with time of day and placement against NYC Department of Transportation laws to ensure accuracy 
- Spots automatically 'decay' over time, to emphasize how likely the space is still open
- Real-time updates via websockets
- Authentication for Facebook, Google or email via Passport