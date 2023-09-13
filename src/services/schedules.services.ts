import { Schedule } from "../entities";
import { ScheduleCreate } from "../interfaces/schedule.interface";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";

const create = async (
  payload: ScheduleCreate,
  userId: number
): Promise<void> => {
  const realEstate = await realEstateRepo.findOneBy({
    id: payload.realEstateId,
  });

  const user = await userRepo.findOneBy({ id: userId });

  await scheduleRepo.save({
    ...payload,
    realEstate: realEstate!,
    user: user!,
  });
};

const read = async (id: number): Promise<any> => {
  const awaitRepo = await realEstateRepo.findOne({
    where: { id: id },
    relations: { address: true, category: true, schedules: { user: true } },
  });
  return awaitRepo;
};

export default { create, read };
