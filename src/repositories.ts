import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AdressRepo } from "./interfaces/address.interface";
import { CategoryRepo } from "./interfaces/category.interface";
import { RealEstateRepo } from "./interfaces/realEstate.interface";
import { ScheduleRepo } from "./interfaces/schedule.interface";
import { UserRepo } from "./interfaces/user.interface";

const userRepo: UserRepo = AppDataSource.getRepository(User);
const addressRepo: AdressRepo = AppDataSource.getRepository(Address);
const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate);
const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

export { userRepo, addressRepo, categoryRepo, realEstateRepo, scheduleRepo };
