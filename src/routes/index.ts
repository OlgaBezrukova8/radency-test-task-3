import express, { Request, Response } from "express";
import {
  createNote,
  retrieveNotes,
  retrieveNoteById,
  updateNote,
  deleteNote,
  getNotesStatistic,
} from "../services/notes";
import { NoteProps } from "../types";
import validateNoteData from "../helpers/validateNoteData";

const router = express.Router();

router.get("/notes", async (_req: Request, res: Response) => {
  const notes = await retrieveNotes();
  res.json(notes);
});

router.get("/notes/stats", async (_req: Request, res: Response) => {
  const stats = await getNotesStatistic();
  res.json(stats);
});

router.get("/notes/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const note = await retrieveNoteById(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Can't find a note" });
  }
});

router.post("/notes", async (req: Request, res: Response) => {
  try {
    await validateNoteData(req.body);
    const newNote: NoteProps = await createNote(req.body);
    res.status(201).json(newNote);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/notes/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedNote = await updateNote(id, req.body);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: "Can't find a note" });
  }
});

router.delete("/notes/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deletedNote = await deleteNote(id);
  if (deletedNote) {
    res.json(deletedNote);
  } else {
    res.status(404).json({ message: "Can't find a note" });
  }
});

export default router;
