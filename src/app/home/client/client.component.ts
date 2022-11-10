import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})

export class ClientsComponent implements OnInit {
  public clients: any;
  public editedClient: any;

  public isCreateDisabled: boolean = false;

  public form: FormGroup = this.fb.group({
    firstName: [],
    lastName: [],
    email: [],
    birthday: [],
    phone: []
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  
    const url = `http://127.0.0.1:5000/clients`; 
    this.http.get(url).subscribe(value => {
      this.clients = value;
      console.log(value);
    });
  }

  public createClient() {
    console.log(this.form.value);
    const url = `http://127.0.0.1:5000/client`;
    
    this.http.post(url, this.form.value).subscribe();
  }

  public editClient(client: any) {
    this.editedClient = client;
    this.isCreateDisabled = true;

    const date = new Date(client.birthday).toISOString().slice(0, 10);
    this.form.controls['firstName'].setValue(client.client_name);
    this.form.controls['lastName'].setValue(client.client_lastname);
    this.form.controls['email'].setValue(client.email);
    this.form.controls['birthday'].setValue(date);
    this.form.controls['phone'].setValue(client.client_phone);

    console.log(this.form.value);
  }

  public updateClient() {
    this.isCreateDisabled = false;
    const url = `http://127.0.0.1:5000/client/${this.editedClient.id}`;
    this.http.put(url, this.form.value).subscribe(_ => {
      this.editedClient = null;
      this.form.reset();
    });
  }

  public deleteClient() {
    this.isCreateDisabled = false;
    const url = `http://127.0.0.1:5000/client/${this.editedClient.id}`;
    this.http.delete(url).subscribe(_ => {
      this.editedClient = null;
    })
  }
}
