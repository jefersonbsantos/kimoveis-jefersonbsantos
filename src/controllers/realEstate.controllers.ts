import { Request, Response } from "express";
import { RealEstate } from "../entities";
import realEstateServices from "../services/realEstate.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstateServices.create(req.body);

  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstateServices.read();
  return res.status(200).json(realEstate);
};

export default { create, read };
