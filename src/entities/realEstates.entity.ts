import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Schedule from "./schedules.entity";
import Category from "./categories.entity";
import Address from "./addresses.entity";

@Entity("realStates")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", default: 0, precision: 12, scale: 2 })
  value: string | number;

  @Column()
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToMany(() => Schedule, (s) => s.realState)
  schedules: Array<Schedule>;

  @ManyToOne(() => Category, (c) => c.realState)
  category: Category;

  @OneToOne(() => Address, (a) => a.realEstate)
  @JoinColumn()
  address: Address;
}

export default RealEstate;
