import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, SharedModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css'
})
export class RegisterPage {
}
