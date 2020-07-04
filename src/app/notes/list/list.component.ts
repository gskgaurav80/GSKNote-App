import { NotesService } from './../../services/note-service';
import { Note } from './../notes.model';

import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {

  notes: Note[];
  subscription: Subscription;

  constructor(private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.noteService.notesChanged.subscribe(
      (notes: Note[])=> {
        this.notes = notes;
      }
    );
    this.notes = this.noteService.getNotes();
  }

onNewNote()
{
  this.router.navigate(['new'],{relativeTo: this.route});
}
ngOnDestroy() {
 this.subscription.unsubscribe();
}
}
