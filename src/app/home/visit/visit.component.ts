import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-visit',
    templateUrl: 'visit.component.html',
    styleUrls: ['visit.component.css']
})

// const vis = [{
//   client_name: 'tom',
//   client_lastname: '',
//   client_phone: 
// }]

export class VisitComponent implements OnInit {
  public visits: any;

  constructor(
    private http: HttpClient
  ) { }
  ngOnInit() {
    const url = `http://127.0.0.1:5000/visits`; 
    this.http.get(url).subscribe(value => {
      this.visits = value;
      console.log(value);
    });
  }
}