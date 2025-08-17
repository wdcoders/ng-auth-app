import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, LucideAngularModule],
  templateUrl: './shell.layout.html',
  styleUrl: './shell.layout.css'
})
export class ShellLayout implements OnInit {
  ngOnInit(): void {
  }
}
