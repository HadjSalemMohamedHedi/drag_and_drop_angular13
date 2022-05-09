import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { toDo } from '../Model/toDo';
import { NoteService } from '../Services/note.service';


@Component({
  selector: 'app-task-manag',
  templateUrl: './task-manag.component.html',
  styleUrls: ['./task-manag.component.scss'],
})
export class TaskManagComponent implements OnInit {


  toDos: toDo[] = [];
  doing: toDo[] = [];
  Done: toDo[] = [];

  constructor(private NoteService:NoteService) {}

  ngOnInit(): void {


    this.NoteService.getNotes().subscribe(
      (todos:any)=>{

        this.toDos = this.NoteService.filter(todos,'todo')


        this.doing = this.NoteService.filter(todos,'doing')


        this.Done = this.NoteService.filter(todos,'done')

    })



  }
  drop(event: CdkDragDrop<any[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const todo = event.item.data;
      todo.state = event.container.element.nativeElement.classList[1];
      this.NoteService.updateNote(todo).subscribe(
        (res)=>{
          console.log(res)
        },
        (eur)=>{
          console.log(eur)
        }
      )
    }
  }
}
