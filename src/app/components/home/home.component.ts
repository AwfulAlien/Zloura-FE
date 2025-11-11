import { Component } from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';
import { ToolbarComponent } from '../common/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
