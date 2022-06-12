import { Request, Response } from "express";
import dataSource from "../../config/database.config";
import { Notes } from "../../entities";
import { priorityEnum } from "../../interface/notes.interface";

export class CreateNotesController {
  async handle(request: Request, response: Response) {
    const { notes, dueDate, priority } = request.body;
    console.log(!notes || !dueDate || !priority);

    if(!notes || !dueDate || !priority || !Object.values(priorityEnum).includes(priority))
      return response.status(400).json({ error: true, message: "Data for creating the annotation is invalid" });

    const notesRepository = dataSource.getRepository(Notes);

    const note = notesRepository.create({
      notes,
      priority,
      dueDate: new Date(dueDate),
    });
    const results = await notesRepository.save(note);

    return response.status(200).json({ data: results })
  }
}
