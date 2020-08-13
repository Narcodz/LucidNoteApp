import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from '../note.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  id: number;
  noteEditMode = false;
  noteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private NotesService: NotesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; //['id'] is dynamic id/edit
      this.noteEditMode = params['id'] != null; //checking router id actully is in edit mode
      console.log(
        this.noteEditMode === false ? 'Not in the edit mode' : 'In the edit mode'
      );
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.noteForm);
    if (this.noteEditMode) {
                             //method 1
                             // const newNote = new Note(
                             //   this.noteForm.value['name'],
                             //   this.noteForm.value['Description'],
                             //   this.noteForm.value['imagePath'],
                             //   this.noteForm.value['ingredients'],
                             // );
                             this.NotesService.updateNote(
                               this.id,
                               this.noteForm.value
                             ); //instead of using method 1 newNote variable,
                             // we can use (this.noteForm.value) here which is represent note model
                           } else {
      this.NotesService.addNote(this.noteForm.value);
      console.log(this.noteForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    // initial values in the form
    let noteName = '';
    let noteDescription = '';

    if (this.noteEditMode) {
      const note = this.NotesService.getSingleNote(this.id);
      noteName = note.name;
      noteDescription = note.description;
    }

    this.noteForm = new FormGroup({
      name: new FormControl(noteName, Validators.required),
      description: new FormControl(noteDescription, Validators.required),
    });
  }
}
