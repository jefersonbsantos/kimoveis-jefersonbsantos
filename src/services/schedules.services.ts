import { Schedule } from "../entities";
import { ScheduleCreate } from "../interfaces/schedule.interface";
import { scheduleRepo } from "../repositories";

const create = async (payload: ScheduleCreate): Promise<Schedule> => {
  const schedule: Schedule = scheduleRepo.create(payload);
  await scheduleRepo.save(schedule);

  return schedule;
};

const read = async (): Promise<Schedule[]> => {
  const awaitRepo = await scheduleRepo.find();
  return awaitRepo;
};

export default { create, read };
