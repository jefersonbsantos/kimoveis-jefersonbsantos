import { Repository } from "typeorm";
import { z } from "zod";
import { Schedule } from "../entities";
import { scheduleCreateSchema } from "../schemas/schedule.schema";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRepo };
