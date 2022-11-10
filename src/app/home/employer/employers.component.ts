import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-employers',
    templateUrl: 'employers.component.html',
    styleUrls: ['employers.component.css']
})

export class EmployersComponent implements OnInit {
  public employers: any;
  public editedEmployer: any;

  public isCreateDisabled: boolean = false;
  public form: FormGroup = this.fb.group({
    firstName: [],
    lastName: [],
    phone: []
  });
  
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const url = `http://127.0.0.1:5000/employers`; 
    this.http.get(url).subscribe(value => {
      this.employers = value;
      console.log(value);
    });
  }
    public createEmployer() {
    console.log(this.form.value);
    const url = `http://127.0.0.1:5000/employer`;   
    this.http.post(url, this.form.value).subscribe();
  }

  public editClient(client: any) {
    this.editedEmployer = client;
    this.isCreateDisabled = true;
      this.form.controls['firstName'].setValue(client.first_name);
    this.form.controls['lastName'].setValue(client.last_name);
    this.form.controls['phone'].setValue(client.phone);
      console.log(this.form.value);
   }

  public deleteEmployer() {
    const url = `http://127.0.0.1:5000/client/${this.editedEmployer.id}`;
    this.http.delete(url).subscribe(_ => {
      this.editedEmployer = null;
    })
  }
  
  public updateEmployer() {
   //   this.isCreateDisabled = false;
   //   const url = `http://127.0.0.1:5000/client/${this.editedEmployer.id}`;
   //   this.http.put(url, this.form.value).subscribe(_ => {
   //     this.editedEmployer = null;
   //     this.form.reset();
   //   });
   }
}
