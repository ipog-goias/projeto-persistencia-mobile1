import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudanteFormComponent } from "./features/estudante-form/estudante-form.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule,
    EstudanteFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-persistencia';
}
