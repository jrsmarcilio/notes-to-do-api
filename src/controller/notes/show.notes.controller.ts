import { Request, Response } from "express";
import dataSource from "../../config/database.config";
import { Notes } from "../../entities";

export class ShowNotesController {
  async index(request: Request, response: Response) {

    const notes = await dataSource.getRepository(Notes).find();
    if(!notes) return response.status(400).json({ error: true, message: "Error get annotation!"})

    return response.status(200).json({ data: notes });
  }

  async showById(request: Request, response: Response) {
    const { id } = request.params;

    const notes = await dataSource.getRepository(Notes).findOne({ where: { id }});
    if(!notes?.id) return response.status(400).json({ error: true, message: `Error get annotation by id ${id}`})

    return response.status(200).json({ data: notes });
  }
}
