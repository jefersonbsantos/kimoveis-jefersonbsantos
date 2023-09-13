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

  @Column()
  realStateId: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RealEstate)
  realState: RealEstate;
}

export default Schedule;
