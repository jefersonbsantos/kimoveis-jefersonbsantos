import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;
}

export default Schedule;
