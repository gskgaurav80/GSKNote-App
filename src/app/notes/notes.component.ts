import { NotesService } from './../services/note-service';
import { Note } from './notes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']

})
export class NotesComponent implements OnInit {
selectedNote: Note;
opened: boolean = false;

 
  ngOnInit(): void {
    
  }
  toggleSidebar() {
    this.opened = !this.opened;
  }
}
