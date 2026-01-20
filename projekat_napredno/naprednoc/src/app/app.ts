import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Features } from "./features/features";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Features],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('naprednoc');
}
