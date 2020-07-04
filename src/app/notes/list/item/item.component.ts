import { NotesService } from './../../../services/note-service';
import { Note } from './../../notes.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() note: Note;
  @Input() index:number;
  



  ngOnInit(): void {
  }

}
