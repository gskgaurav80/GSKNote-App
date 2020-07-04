import { NotesService } from './../../services/note-service';
import { Note } from './../notes.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 note: Note;
 id:number;
  constructor(private route: ActivatedRoute,
    private noteService:NotesService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.note = this.noteService.getNote(this.id); 
      
      }
    );
  }
  onEdit(){
 this.router.navigate(['edit'],{relativeTo: this.route});
  }
  onDelete()
  {
    this.noteService.deleteNote(this.id);
    this.router.navigate(['/notes']);
  }

}
