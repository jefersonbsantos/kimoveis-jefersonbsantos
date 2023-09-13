import { Request, Response } from "express";
import { Schedule } from "../entities";
import schedulesServices from "../services/schedules.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { sub } = res.locals.decoded;
  const schedule = await schedulesServices.create(req.body, sub);

  return res.status(201).json({ message: "Schedule created" });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const schedules = await schedulesServices.read(Number(req.params.id));
  return res.status(200).json(schedules);
};

export default { create, read };
