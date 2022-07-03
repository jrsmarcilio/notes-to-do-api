import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import dataSource from "../../config/database.config";
import { Notes } from "../../entities";
import { priorityEnum } from "../../interface/notes.interface";
const { OK, UNAUTHORIZED } = StatusCodes;

export class UpdateNotesController {
  async update(request: Request, response: Response) {
    const { id, notes, name, dueDate, priority, isActive, done } = request.body;

    if(!id || !name || !dueDate || !priority || !Object.values(priorityEnum).includes(priority))
      return response.status(UNAUTHORIZED).json({
        error: true,
        message: "Data for creating the annotation is invalid"
      });

    const notesRepository = dataSource.getRepository(Notes);

    const note = await notesRepository.findOne({ where: { id } });
    if(!note) return response.status(UNAUTHORIZED).json({ message: "Annotation not found." });

    note.name = name || note?.name;
    note.notes = notes || note?.notes;
    note.dueDate = dueDate || note?.dueDate;
    note.priority = priority || note?.priority;
    note.isActive = isActive || note.isActive;
    note.done = done || note.done;

    const noteUpdated = await notesRepository.save(note);

    if (noteUpdated) return response.status(OK).json({ 
      data: noteUpdated, message: "Successful updated annotation."
    });
    else return response.status(UNAUTHORIZED).json({ message: "Error updated annotation." });
  }
}
