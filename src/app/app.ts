import { Component, signal } from '@angular/core';
import { SchemaView } from './components/schema-view/schema-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SchemaView],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-task');
}
