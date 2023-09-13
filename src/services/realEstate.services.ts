import { RealEstate } from "../entities";
import { RealEstateCreate } from "../interfaces/realEstate.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const create = async (payload: RealEstateCreate): Promise<void> => {
  const categories = await categoryRepo.findOneBy({ id: payload.categoryId });

  const addresses = await addressRepo.save(payload.address);

  const { id } = await realEstateRepo.save({
    ...payload,
    address: addresses,
    category: categories!,
  });

  await realEstateRepo.findOne({
    where: { id: id },
    relations: { category: true, address: true },
  });
};

const read = async (): Promise<RealEstate[]> => {
  const awaitRepo: RealEstate[] = await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
  return awaitRepo;
};

export default { create, read };
