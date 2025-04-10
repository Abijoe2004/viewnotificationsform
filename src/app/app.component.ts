import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewnotificationsComponent } from './viewnotifications/viewnotifications.component';
@Component({
  selector: 'app-root',
  imports: [ViewnotificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viewnotifications';
}
