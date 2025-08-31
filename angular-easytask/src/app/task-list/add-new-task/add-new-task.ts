import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageTask } from '../../services/manage-task';

@Component({
  selector: 'app-add-new-task',
  imports: [FormsModule],
  templateUrl: './add-new-task.html',
  styleUrl: './add-new-task.scss',
})
export class AddNewTask {
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private manageTask = inject(ManageTask);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.manageTask.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
