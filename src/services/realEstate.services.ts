import { RealEstate } from "../entities";
import { RealEstateCreate } from "../interfaces/realEstate.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
  const categories = await categoryRepo.findOneBy({ id: payload.categoryId });

  const addresses = await addressRepo.save(payload.address);

  const { id } = await realEstateRepo.save({
    ...payload,
    address: addresses,
    category: categories!,
  });

  const realEstates = await realEstateRepo.findOne({
    where: { id: id },
    relations: { category: true, address: true },
  });

  return realEstates!;
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
