import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// @Injectable()
@Injectable({
	providedIn: 'root'
})
export class TableService {

	constructor(public http: HttpClient) {
		this.getJSON().subscribe(data => {
			console.log(data);
		});
	}

	public getJSON(): Observable<any> {
		return this.http.get('./../assets/data.json');
	}

}
