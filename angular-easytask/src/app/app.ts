import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './data/dummy-users';
import { Header } from './header/header';
import { TaskList } from "./task-list/task-list";
import { UserItem } from "./user-item/user-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserItem, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-easytask');
  users = DUMMY_USERS
  selectedUserId = signal<string>('');

  get selectedUser () {
    return this.users.find(user => user.id === this.selectedUserId());
  }

  onSelectUser(id: string) {
    console.log(id)
    this.selectedUserId.set(id);
  }
}
