import * as yup from "yup";
import { NoteProps } from "../types";

const validateNoteData = async (noteData: NoteProps): Promise<void> => {
  const noteSchema = yup.object().shape({
    name: yup.string().required(),
    time: yup.string().required(),
    category: yup.string().required(),
    content: yup.string().required(),
  });

  await noteSchema.validate(noteData);
};

export default validateNoteData;
