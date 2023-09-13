import { Request, Response } from "express";
import { Schedule } from "../entities";
import schedulesServices from "../services/schedules.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const schedule: Schedule = await schedulesServices.create(req.body);

  return res.status(201).json(schedule);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const schedules = await schedulesServices.read();
  return res.status(200).json(schedules);
};

export default { create, read };
