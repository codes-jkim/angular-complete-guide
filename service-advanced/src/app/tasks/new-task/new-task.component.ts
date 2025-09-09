import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageTasksService } from '../../manage-tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private manageTasks: ManageTasksService) {}

  onAddTask(title: string, description: string) {
    this.manageTasks.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
