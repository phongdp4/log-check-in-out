import "reflect-metadata"
import { DataSource } from "typeorm"
import { MachineEventLogEntity } from "./entity/machine-event-log.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "postgres",
  schema: "tracking",
  synchronize: true,
  logging: true,
  entities: [MachineEventLogEntity],
  migrations: [],
  subscribers: [],
});
