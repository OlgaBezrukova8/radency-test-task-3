import notes from "../helpers/readNotesFromJson";
import { NoteProps } from "../types";

export const getNotes = (): NoteProps[] => {
  return notes;
};

export const getNoteById = (id: number): NoteProps | undefined => {
  return notes.find((note) => note.id === id);
};

export const addNote = (createdNote: NoteProps): NoteProps => {
  notes.push(createdNote);
  return createdNote;
};

export const updateNoteById = (
  id: number,
  updatedNote: NoteProps
): NoteProps | undefined => {
  const updatedNoteIndex = notes.findIndex((note) => note.id === id);
  if (updatedNoteIndex !== -1) {
    notes[updatedNoteIndex] = updatedNote;
    return updatedNote;
  }
  return undefined;
};

export const deleteNoteById = (id: number): NoteProps | undefined => {
  const deletedNoteIndex = notes.findIndex((note) => note.id === id);
  if (deletedNoteIndex !== -1) {
    const deletedNote = notes[deletedNoteIndex];
    notes.splice(deletedNoteIndex, 1);
    return deletedNote;
  }
  return undefined;
};
