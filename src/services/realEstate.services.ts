import { RealEstate } from "../entities";
import { RealEstateCreate } from "../interfaces/realEstate.interface";
import { realEstateRepo } from "../repositories";

const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
  const realEstate: RealEstate = realEstateRepo.create(payload);
  await realEstateRepo.save(realEstate);

  return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
  const awaitRepo = await realEstateRepo.find();
  return awaitRepo;
};

export default { create, read };
