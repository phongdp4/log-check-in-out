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

// Catches ctrl+c event
process.on("SIGINT", () => {
  exitHandler();
  process.exit(0);
});

process.on("message", function (msg) {
  if (msg == "shutdown") {
    console.log("Closing all connections...");
    setTimeout(function () {
      console.log("Finished closing connections");
      process.exit(0);
    }, 1500);
  }
});
