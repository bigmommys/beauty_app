import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ClientsComponent } from './client/client.component';
import { EmployersComponent } from './employer/employers.component';
import { HomeComponent } from './home.component';
import { VisitsPageComponent } from './visit-page/visit-page.component';
import { VisitComponent } from './visit/visit.component'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'visits',
    component: VisitsPageComponent,
    children: [
      {
        path: '',
        component: VisitComponent
      }
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full'
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'employers',
        component: EmployersComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)],
  declarations: [
    HomeComponent,
    VisitsPageComponent,
    VisitComponent,
    AccountComponent,
    ClientsComponent,
    EmployersComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
