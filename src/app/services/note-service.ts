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
    public date: Date = new Date();

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
          note.date=new Date();
          this.notes.push(note);
          this.notesChanged.next(this.notes.slice());
      }
      updateNote(index: number,newNote: Note) {
        newNote.date = new Date();  
        this.notes[index] = newNote;
        this.notesChanged.next(this.notes.slice());
      }
      deleteNote(index: number) {
          this.notes.splice(index,1);
          this.notesChanged.next(this.notes.slice());
      }
    }
