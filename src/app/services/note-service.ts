import { Note } from './../notes/notes.model';
import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class NotesService {
    notesChanged = new Subject<Note[]>();

    // private notes: Note[] = [
    //     new Note('Teamcenter Compliance','Teamcente is a tool used for PLM Domain'),
    //     new Note('AWS Compliance','Teamcente is a tool used for PLM Domain'),
    //     new Note('Teamcenter Compliance','Teamcente is a tool used for PLM Domain')
    //   ];

      private notes: Note[] =[];
      getNotes()
      {
          return this.notes.slice();
      }
      getNote(index: number) {
          return this.notes[index];
      }

      setNotes(notes: Note[]) {
          this.notes = notes;
          this.notesChanged.next(this.notes.slice());
      }
      addNote(note:Note) {
          this.notes.push(note);
          this.notesChanged.next(this.notes.slice());
      }
      updateNote(index: number,newNote: Note) {
          this.notes[index] = newNote;
          this.notesChanged.next(this.notes.slice());
      }
      deleteNote(index: number) {
          this.notes.splice(index,1);
          this.notesChanged.next(this.notes.slice());
      }
    }
//   public notes: Note[] = [];
//   public loaded: boolean = false;

//   constructor(private httpClient: HttpClientModule) { 

//   }

//   load(): Promise<boolean> {

//     // Return a promise so that we know when this operation has completed
//     return new Promise((resolve) => {

//       // Get the notes that were saved into storage
//       this.httpClient.get('notes').then((notes) => {

//         // Only set this.notes to the returned value if there were values stored
//         if(notes != null){
//           this.notes = notes;
//         }

//         // This allows us to check if the data has been loaded in or not
//         this.loaded = true;
//         resolve(true);

//       });

//     });

//   }

//   save(): void {
//     // Save the current array of notes to storage
//     this.httpClient.push('notes', this.notes);
//   }

//   getNote(id): Note {
//     // Return the note that has an id matching the id passed in
//     return this.notes.find(note => note.id === id);
//   }

//   createNote(title): void {

//     // Create a unique id that is one larger than the current largest id
//     let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

//     this.notes.push({
//       id: id.toString(),
//       title: title,
//       content: ''
//     });

//     this.save();

//   }

//   deleteNote(note): void {

//     // Get the index in the array of the note that was passed in
//     let index = this.notes.indexOf(note);

//     // Delete that element of the array and resave the data
//     if(index > -1){
//       this.notes.splice(index, 1);
//       this.save();
//     }

//   }

// }