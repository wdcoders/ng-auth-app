import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-user-list',
  imports: [LucideAngularModule, CommonModule, RouterLink],
  templateUrl: './user-list.page.html',
  styleUrl: './user-list.page.css'
})
export class UserListPage {

}
