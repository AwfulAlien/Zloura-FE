import { Component } from '@angular/core';
import { MaterialModule } from '../../../module/material/material.module';

@Component({
  selector: 'app-toolbar',
  imports: [MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {}
