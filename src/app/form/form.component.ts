import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	loginForm: FormGroup;
	constructor(private fb: FormBuilder) {
	}
	ngOnInit() {
		this.loginForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
			password: new FormControl(null, [Validators.required, Validators.maxLength(8)])
		});
	}
	loginUser() {
		console.log(this.loginForm.status);
		console.log(this.loginForm.value);
	}
}
