import { Note } from './notes.model';
import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
    name: 'noteFilter'
})
export class FilterNotes implements PipeTransform {
// @Input() note: Note;

 transform(notes: Note[], searchTerm:string):Note[] {
     if(!notes || !searchTerm ){
         return notes;
     }
     return notes.filter(note =>(note.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || 
   (note.content.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
 }
}