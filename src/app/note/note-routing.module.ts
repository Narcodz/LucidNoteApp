import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteComponent } from "./note.component";
import { NoteStartComponent } from './note-start/note-start.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NotePaperComponent } from './note-paper/note-paper.component';
import { AuthGuard } from "../auth/auth-guard.service";

const NoteRoutes: Routes = [
  {
    path: '',
    component: NoteComponent,
    children: [
      { path: '', component: NoteStartComponent },
      {
        path: 'new',
        component: NoteEditComponent,
        // canActivate: [AuthGuard]
      },
      { path: ':id', component: NotePaperComponent }, //Dynamic route
      {
        path: ':id/edit',
        component: NoteEditComponent,
        //  canActivate: [AuthGuard]
      }, //Dynamic route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(NoteRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class NoteRoutingModule {}

