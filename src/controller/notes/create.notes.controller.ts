import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import dataSource from "../../config/database.config";
import { Notes } from "../../entities";
import { priorityEnum } from "../../interface/notes.interface";
const { OK, UNAUTHORIZED } = StatusCodes;

export class CreateNotesController {
  async handle(request: Request, response: Response) {
    const { notes, name, dueDate, priority } = request.body;

    if(!name || !dueDate || !priority || !Object.values(priorityEnum).includes(priority))
      return response.status(UNAUTHORIZED).json({
        error: true,
        message: "Data for creating the annotation is invalid"
      });

    const notesRepository = dataSource.getRepository(Notes);

    const note = notesRepository.create({
      name,
      notes,
      priority,
      dueDate: new Date(dueDate),
    });
    const results = await notesRepository.save(note);

    return response.status(OK).json({ data: results, message: "Successful registered annotation." })
  }
}
