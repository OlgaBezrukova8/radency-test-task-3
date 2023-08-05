export interface NoteProps {
  id: number;
  name: string;
  time: string;
  category: string;
  content: string;
  archived: boolean;
}

export interface NotesStatisticsProps {
  totalNotes: number;
  totalArchivedNotes: number;
  totalActiveNotes: number;
}
