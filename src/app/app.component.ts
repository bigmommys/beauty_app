import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beautyapp';

  public clients: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const url = `http://127.0.0.1:5000/clients`; 
    this.http.get(url).subscribe(value => {
      this.clients = value;
      console.log(value);
    });
  }

}
