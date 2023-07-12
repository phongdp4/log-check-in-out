import logger from "./core/logger";
import { MachineEventLogEntity } from "./entity/machine-event-log.entity";
import { MachineEvent } from "./models/enum/manchine-event.enum";
import http from "http";

const event = new MachineEventLogEntity();
event.type = MachineEvent.START_UP;
event.createdAt = new Date().toLocaleString();
logger.info("Saved a new event: " + JSON.stringify(event));

const host = "localhost";
const port = 5555;
const server = http.createServer();
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

function exitHandler() {
  logger.info("shutdown");
  //.......

  // fs.writeFile('graph.txt', Graph, 'utf8', (err) => {
  //     if (err != null) {
  //         console.error(err);
  //     }
  // });
}

// Catches exit event
process.on("exit", exitHandler.bind(null));

// Catches ctrl+c event
process.on("SIGINT", () => {
  exitHandler();
  process.exit(-1);
});

// Catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null));
process.on("SIGUSR2", exitHandler.bind(null));

// Catches uncaught exceptions
// process.on("uncaughtException", exitHandler.bind(null));
