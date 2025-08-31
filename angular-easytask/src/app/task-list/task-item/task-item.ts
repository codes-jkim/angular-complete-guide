import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { ManageTask } from '../../services/manage-task';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task-item',
  imports: [Card, DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>()

  constructor(private manageTask:ManageTask){}

  onCompleteTask() {
    this.manageTask.removeTask(this.task.id);
  }
}
