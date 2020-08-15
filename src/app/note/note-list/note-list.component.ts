import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Note } from '../note.model';
import { NotesService } from '../note.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit, OnDestroy {
  notes: Note[];
  subcription: Subscription;
  dsSubscription:Subscription

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subcription = this.notesService.notesChanged.subscribe(
      (noteList: Note[]) => {
        console.log(noteList);
        this.notes = noteList; //update the note in the notelist component from the note service, by notesChanged method
      }
    );
    this.notes = this.notesService.getNotesList();
  }

  onNewNote() {
    this.router.navigate(['new'], { relativeTo: this.route });
    console.log('New Note button works');
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
