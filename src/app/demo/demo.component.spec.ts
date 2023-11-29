import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
	let component: DemoComponent;
	let fixture: ComponentFixture<DemoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DemoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DemoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

describe('LightswitchComp', () => {
	it('#clicked() should toggle #isOn', () => {
		const comp = new DemoComponent();
		expect(comp.isOn).toBe(false);
		comp.clicked();
		expect(comp.isOn).toBe(true);
		comp.clicked();
		expect(comp.isOn).toBe(false);
	});
	it('#clicked() should set #message to "is on"', () => {
		const comp = new DemoComponent();
		expect(comp.message).toMatch(/is off/i);
		comp.clicked();
		expect(comp.message).toMatch(/is on/i);
	});
});
