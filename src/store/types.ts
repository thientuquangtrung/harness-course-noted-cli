export interface Note {
  id: string;
  path: string;
  title: string;
  body: string;
}

export interface NotesFile {
  notes: Note[];
}

export interface IndexEntry {
  token: string;
  note_ids: string[];
}

export interface IndexFile {
  tokens: IndexEntry[];
}
