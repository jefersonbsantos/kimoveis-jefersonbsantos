import { Repository } from "typeorm";
import { z } from "zod";
import { RealEstate } from "../entities";
import { realEstateCreateSchema } from "../schemas/realEstate.schema";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateCreate, RealEstateRepo };
