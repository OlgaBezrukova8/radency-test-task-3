import * as fs from "fs";
import * as path from "path";
import { NoteProps } from "../types";

const notesFolderPath = path.join(__dirname, "..", "data");
const notesFilePath = path.join(notesFolderPath, "notesContent.json");

const readNotesFromJson = (): NoteProps[] => {
  try {
    const data = fs.readFileSync(notesFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const notes: NoteProps[] = readNotesFromJson();

export default notes;
