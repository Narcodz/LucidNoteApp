import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { NotesService } from '../note/note.service';
import { Note } from '../note/note.model';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataStorageService {
  constructor(
    private http: Http,
    private NotesService: NotesService,
    private authService: AuthService
  ) {}

  saveNotes() {
    const token = this.authService.getToken(); //getting the signed in user token
    return this.http.put(
      'https://lucid-note-fbf29.firebaseio.com/notes.json?auth=' + token,
      this.NotesService.getNotesList()
    );
  }

  retrieveNotes() {
    const token = this.authService.getToken(); //getting the signed in user token
    return this.http
      .get('https://lucid-note-fbf29.firebaseio.com/notes.json?auth=' + token)
      .subscribe((response: Response) => {
        const notes: Note[] = response.json();
        this.NotesService.setNotesList(notes);
      });
  }
}
