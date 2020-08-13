import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Note } from '../note.model';
import { NotesService } from '../note.service';

@Component({
  selector: 'app-note-paper',
  templateUrl: './note-paper.component.html',
  styleUrls: ['./note-paper.component.css'],
})
export class NotePaperComponent implements OnInit {
  note: Note;
  id: number;

  constructor(
    private NotesService: NotesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // + used cast id, string to number
      this.note = this.NotesService.getSingleNote(this.id);
    });
  }

  onEditNote() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); //Second method
  }


  onDeleteNote(){
    this.NotesService.deleteNote(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
