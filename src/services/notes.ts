import { Request } from "express";
import {
  getNotes,
  getNoteById,
  addNote,
  updateNoteById,
  deleteNoteById,
} from "../repositories/notes";
import notes from "../helpers/readNotesFromJson";
import validateNoteData from "../helpers/validateNoteData";
import generateNoteId from "../helpers/generateNoteId";
import { NoteProps, NotesStatisticsProps } from "../types";

export const retrieveNotes = async (): Promise<NoteProps[]> => {
  return getNotes();
};

export const retrieveNoteById = async (
  id: number
): Promise<NoteProps | undefined> => {
  return getNoteById(id);
};

export const createNote = async (
  noteData: Request["body"]
): Promise<NoteProps> => {
  await validateNoteData(noteData);
  const createdNote: NoteProps = {
    ...noteData,
    id: generateNoteId(notes),
    archived: false,
  };
  return addNote(createdNote);
};

export const updateNote = async (
  id: number,
  updatedNoteData: Request["body"]
): Promise<NoteProps | undefined> => {
  await validateNoteData(updatedNoteData);
  const updatedNote: NoteProps = { ...updatedNoteData, id, archived: false };
  return updateNoteById(id, updatedNote);
};

export const deleteNote = async (
  id: number
): Promise<NoteProps | undefined> => {
  return deleteNoteById(id);
};

export const getNotesStatistic = async (): Promise<NotesStatisticsProps> => {
  const totalNotes = await retrieveNotes();
  const totalArchivedNotes = totalNotes.filter((note) => note.archived).length;
  const totalActiveNotes = totalNotes.length - totalArchivedNotes;

  return {
    totalNotes: totalNotes.length,
    totalArchivedNotes,
    totalActiveNotes,
  };
};
