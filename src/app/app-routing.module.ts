import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'notes',
    loadChildren: () =>
      import('./note/notes.module').then((m) => m.NoteModule), //lazyloading
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
