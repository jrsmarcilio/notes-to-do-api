import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import dataSource from "../../config/database.config";
import { Notes } from "../../entities";

export class DeleteNotesController {
  async _delete(request: Request, response: Response) {
    const { id } = request.params;

    const note = await dataSource.getRepository(Notes).delete(id);

    if(note.affected) return response.status(StatusCodes.OK).json({ message: "Successful deleted annotation." });
    return response.status(StatusCodes.UNAUTHORIZED).json({ message: "Error when deleting annotation" });
  }
}
