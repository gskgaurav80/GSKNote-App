import { DataStorageService } from './../../data-storage.service';
import { NotesService } from './../../services/note-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: number;
editMode = false;
noteForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private noteService: NotesService,
    private router: Router,
    private dataService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=> {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit()
  {
    if(this.editMode) {
      this.noteService.updateNote(this.id, this.noteForm.value);
      this.dataService.storeNotes();
    }
    else {
      this.noteService.addNote(this.noteForm.value);
      this.dataService.storeNotes();
      this.editMode=true;
    }
    this.onCancel();
    }

    onCancel() {
      this.router.navigate(['../../'],{relativeTo:this.route});
    }
  
    // onSave() {
    //   this.dataService.storeNotes();
    // }
private initForm()
{
  let noteTitle ='';
  let noteContent = '';
  if(this.editMode) {
    const note = this.noteService.getNote(this.id);
      noteTitle=note.title;
      noteContent=note.content; }
      this.noteForm = new FormGroup({
        'title': new FormControl(noteTitle,Validators.required),
        'content': new FormControl(noteContent,Validators.required)
      });
  }
}


