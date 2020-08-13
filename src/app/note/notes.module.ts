import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NoteComponent } from './note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotePaperComponent } from './note-paper/note-paper.component';
import { NoteItemComponent } from './note-list/note-item/note-item.component';
import { NoteStartComponent } from './note-start/note-start.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { CommonModule } from '@angular/common';
import { NoteRoutingModule } from './note-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NoteComponent,
    NoteListComponent,
    NoteEditComponent,
    NotePaperComponent,
    NoteItemComponent,
    NoteStartComponent,
  ],
  imports: [
    CommonModule, // Consist of *ngIf, *ngFor and etc
    ReactiveFormsModule,
    NoteRoutingModule,
    SharedModule,
  ],
})
export class NoteModule {}
