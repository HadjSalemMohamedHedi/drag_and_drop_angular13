import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { toDo } from '../Model/toDo';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  link = 'http://localhost:3000/api/Notes';
  constructor(private http: HttpClient) {}

  getNotes(): Observable<toDo[]> {
    return this.http.get<toDo[]>(this.link);
  }

  filter(tab: [], prop: any) {
    return tab.filter((toDo: toDo) => {
      return toDo.state === prop;
    });
  }

  updateNote(toDo: toDo) {
    return this.http.put(this.link, toDo);
  }
}
