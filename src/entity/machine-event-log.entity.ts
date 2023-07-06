import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MachineEvent } from "../models/enum/manchine-event.enum";

@Entity({ name: "machine-event-log" })
export class MachineEventLogEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "type", type: "varchar", enum: MachineEvent })
  type: MachineEvent;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt: Date;
}
