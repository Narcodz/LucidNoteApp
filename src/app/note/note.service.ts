import { Injectable } from '@angular/core';

import { Note } from './note.model';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class NotesService {
  notesChanged = new Subject<Note[]>();

  private notes: Note[] = [
    new Note('Note 1', 'This is first note'),
    new Note('Note 2', 'This is second note'),
    new Note('Note 3', 'This is third note'),
    new Note('Note 4', 'This is fourth note'),
    new Note('Note 5', 'This is fifth note'),
  ];

  // since notes array is private we cant access from outside. so we accessing by returning in the method
  // & returning copy of notes array to avoid direct manupialation

  constructor() {}

  setNotesList(noteslist: Note[]) {
    this.notes = noteslist;
    this.notesChanged.next(this.notes.slice());
  }

  getNotesList() {
    return this.notes.slice();
  }

  //Generating single note by index(used when selecting one note in note list)
  getSingleNote(index: number) {
    return this.notes[index];
  }

  //Excute when add a new note
  addNote(newNote: Note) {
    this.notes.push(newNote);
    this.notesChanged.next(this.notes.slice()); //adding copy of changed note array to note list
  }

  //Excute when update the note
  updateNote(index: number, updateNote: Note) {
    this.notes[index] = updateNote;
    this.notesChanged.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged.next(this.notes.slice());
  }
}
