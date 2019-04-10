# JS401 - Lab-17 TCP Server
## Author: Cory Henderson
This utilizes a TCP connection and sockets to connect an application and logger to a server, and relay information between the two files through the server.s

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-13-bearerAuth/tree/submission)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-13-bearerAuth)

# Modules
- app.js: contains functionality for read/update/write files
- server.js: opens port and contains handler functions for socket events
- logger.js: contains socket event listeners which log save/error events

# Setup
- Run nodemon on PORT to start server
    - CLI: nodemon
- Connect logger.js to server
    - CLI: nodemon logger.js
- Read/write file
    - CLI: node app.js (file path to write)

## Tests
- Testing for expected route endpoints is performed using jest.