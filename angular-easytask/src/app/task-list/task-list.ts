import { Component, Input } from '@angular/core';
import { ManageTask } from '../services/manage-task';
import { AddNewTask } from './add-new-task/add-new-task';
import { TaskItem } from './task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem, AddNewTask],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  constructor(private manageTask: ManageTask) {}

  get selectedUserTasks() {
    return this.manageTask.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
