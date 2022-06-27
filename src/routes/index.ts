import { Router, Request, Response } from "express";
import {
  CreateNotesController,
  DeleteNotesController,
  ShowNotesController,
  UpdateNotesController,
} from "../controller";

const createNotes = new CreateNotesController();
const showNotes = new ShowNotesController();
const deleteNotes = new DeleteNotesController();
const updateNotes = new UpdateNotesController();

const routes = Router();

// Notes
routes.post("/notes", createNotes.handle);
routes.get("/notes", showNotes.index);
routes.get("/note/:id", showNotes.showById);
routes.put("/note", updateNotes.update);
routes.delete("/note/:id", deleteNotes._delete);

routes.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Server running!" });
});

export default routes;
