import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {


constructor(private http: HttpClient){
 

}

  title = 'Grid Data';

  columnDefs = [
		{headerName: 'id', field: 'id' },
		{headerName: 'first_name', field: 'first_name' },
    {headerName: 'last_name', field: 'last_name'},
    {headerName: 'email', field: 'email' },
		{headerName: 'gender', field: 'gender' },
		{headerName: 'ip_address', field: 'ip_address'}
  ];

  rowData: any;
  ngOnInit() {
      this.rowData = this.http.get('../assets/DATA.json');
  }

}
