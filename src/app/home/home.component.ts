import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  
  public form: FormGroup = this.fb.group({
    firstName: [],
    lastName: [],
    phone: [],
    visitDate: [],
    birthday: [],
    email: []
  });

  selectedService: any;
  selectedEmployer: any

  employers: any;
  services: any;
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
      
  }

  ngOnInit() {
    const employersUrl = `http://127.0.0.1:5000/employers`; 
    this.http.get(employersUrl).subscribe((value: any) => {
      this.employers = value.map((res: any) => <{value: string, viewValue: string}>{value: res.id, viewValue: `${res.first_name} ${res.last_name}` });
    });

    const url = `http://127.0.0.1:5000/services`; 
    this.http.get(url).subscribe((value: any) => {
      this.services = value.map((res: any) => <{value: string, viewValue: string}>{value: res.id, viewValue: `${res.service_name} ${res.price}` });
    });
    
  }


  public createVisit() {
    const url = `http://127.0.0.1:5000/visit`; 
    let result = this.form.value;

    result['serviceId'] = this.selectedService;
    result['employerId'] = this.selectedEmployer;
    this.http.post(url, result).subscribe();
  }
}
