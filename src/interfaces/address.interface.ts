import { z } from "zod";
import { addressCreateSchema } from "../schemas/address.schema";
import { Repository } from "typeorm";
import { Address } from "../entities";

type AdressCreate = z.infer<typeof addressCreateSchema>;

type AdressRepo = Repository<Address>;

export { AdressCreate, AdressRepo };
