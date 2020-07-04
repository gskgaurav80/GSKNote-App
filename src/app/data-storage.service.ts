import { Note } from './notes/notes.model';
import { NotesService } from './services/note-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class DataStorageService {

   constructor(private http:HttpClient,private noteService: NotesService) {}
   
   storeNotes() {
       const notes =this.noteService.getNotes();
       this.http.put('https://gsknote-app.firebaseio.com/notes.json',
       notes).subscribe(response=>{
           
       })
   }

   fetchNotes(){
       this.http.get<Note[]>('https://gsknote-app.firebaseio.com/notes.json')
       .subscribe(notes => { 
           this.noteService.setNotes(notes);
       });

   }
}