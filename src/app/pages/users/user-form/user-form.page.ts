import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './user-form.page.html',
  styleUrl: './user-form.page.css'
})
export class UserFormPage {

}
