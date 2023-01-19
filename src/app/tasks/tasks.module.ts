import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksService } from './services/tasks.service';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [TasksComponent, HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TasksService],
})
export class TasksModule {}
