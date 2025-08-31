import { Injectable } from '@angular/core';
import { NewTask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class ManageTask {
  private tasks = [
    { id: 't1', userId: 'u1', title: 'task1', summary: 'task 1 summary', dueDate: '2025-12-31' },
    { id: 't2', userId: 'u2', title: 'task2', summary: 'task 2 summary', dueDate: '2025-12-31' },
    { id: 't3', userId: 'u3', title: 'task3', summary: 'task 3 summary', dueDate: '2025-12-31' },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  public getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  public addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      ...taskData,
      id: new Date().getTime().toString(),
      userId: userId,
    });
    this.saveTasks();
  }

  public removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
