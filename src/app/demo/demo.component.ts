import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-demo',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './demo.component.html',
	styleUrl: './demo.component.scss',
})
export class DemoComponent {
	isOn = false;
	clicked() {
		this.isOn = !this.isOn;
	}
	get message() {
		return `The light is ${this.isOn ? 'On' : 'Off'}`;
	}
}
