import { Component } from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';

@Component({
    selector: 'app-home',
    imports: [MaterialModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {}
