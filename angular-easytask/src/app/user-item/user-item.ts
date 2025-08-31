import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user-item',
  imports: [Card],
  templateUrl: './user-item.html',
  styleUrl: './user-item.scss',
})
export class UserItem {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // select= output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
