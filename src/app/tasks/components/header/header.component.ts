import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  text: string = '';

  changeText(event: Event): void {
    console.log(event, 'here');
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTask(): void {
    console.log('add task', this.text);
  }
}
