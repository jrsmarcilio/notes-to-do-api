import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import dataSource from "../../config/database.config";
import { Notes } from "../../entities";
import { priorityEnum } from "../../interface/notes.interface";
const { OK, UNAUTHORIZED } = StatusCodes;

export class UpdateNotesController {
  async update(request: Request, response: Response) {
    const { id, notes, name, dueDate, priority } = request.body;

    if(!id || !name || !dueDate || !priority || !Object.values(priorityEnum).includes(priority))
      return response.status(UNAUTHORIZED).json({
        error: true,
        message: "Data for creating the annotation is invalid"
      });

    const notesRepository = dataSource.getRepository(Notes);

      const note = await notesRepository.findOne({ where: { id } });
      if(!note) return response.status(UNAUTHORIZED).json({ message: "Annotation not found." });

    const noteUpdated = await notesRepository.update(
      { id },
      {
        name: name || note?.name,
        notes: notes || note?.notes,
        dueDate: dueDate || note?.dueDate,
        priority: priority || note?.priority,
      }
    );

    if (noteUpdated.affected == 1) return response.status(OK).json({ message: "Successful updated annotation." });
    else return response.status(UNAUTHORIZED).json({ message: "Error updated annotation." });
  }
}
