import { NoteProps } from "../types";

const generateNoteId = (notes: NoteProps[]): number => {
  if (notes.length === 0) {
    return 1;
  }

  const maxId = notes.reduce((prevMaxId, note) => {
    return note.id > prevMaxId ? note.id : prevMaxId;
  }, 0);

  return maxId + 1;
};

export default generateNoteId;
