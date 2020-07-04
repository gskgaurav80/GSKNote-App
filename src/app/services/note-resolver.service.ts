import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from './../data-storage.service';
import { Note } from '../notes/notes.model';

@Injectable({ providedIn:'root'})
export class NotesResolverService implements Resolve<Note[]> {
    
    constructor(private dataService: DataStorageService) {}
 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.dataService.fetchNotes();
}
}