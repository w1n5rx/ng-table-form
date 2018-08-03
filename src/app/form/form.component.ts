import { User } from './../User';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	user: User;

	constructor() { }

	ngOnInit() {
		this.user = new User({
			email: '', password: { pwd: '', confirm_pwd: '' }
		});
	}

	// Mock data
	// user = new User({
	// 	email: 'mockdata@example.de',
	// 	password: { pwd: '', confirm_pwd: '' }
	// });

	onFormSubmit(value: User, valid: Boolean) {
		this.user = value;
		console.log(this.user);
		console.log('valid: ' + valid);
	}
}
