import logger from "./core/logger";
import { AppDataSource } from "./data-source";
import { MachineEventLogEntity } from "./entity/machine-event-log.entity";
import { MachineEvent } from "./models/enum/manchine-event.enum";

AppDataSource.initialize()
  .then(async () => {
    const event = new MachineEventLogEntity();
    event.type = MachineEvent.START_UP;
    // await AppDataSource.manager.save(event);
    logger.info("Saved a new event: " + JSON.stringify(event));
  })
  .catch((error) => logger.error(error));

process.on("exit", function () {
  logger.info("Exiting. ");

  const event = new MachineEventLogEntity();
  event.type = MachineEvent.SHUTDOWN;
  logger.info(event);
  //   await AppDataSource.manager.save(event);
});
