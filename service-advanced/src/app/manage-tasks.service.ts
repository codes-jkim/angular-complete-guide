import { inject, Injectable, signal } from '@angular/core';
import { LoggingService } from './logging.service';
import { Task, TaskStatus } from './tasks/task.model';

@Injectable({
  providedIn: 'root',
})
export class ManageTasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
    this.loggingService.log(`Task added with title: ${taskData.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log(`Task status updated: ${taskId}, ${newStatus}`);
  }


}
