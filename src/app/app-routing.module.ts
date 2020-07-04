import { EditComponent } from './notes/edit/edit.component';
import { DetailComponent } from './notes/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: '/notes',pathMatch: 'full' },
  { path: "notes", component: NotesComponent, children: [
      {path: '' , component: HomeComponent},
      {path: 'new', component:EditComponent},
      { path: ':id' , component:DetailComponent},
      {path: ':id/edit', component:EditComponent}
  ]}
//   { path: "notes/", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}