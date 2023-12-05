import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffModule } from './staff/staff.module';
import { StaffLoginComponent } from './staff/staff-login/staff-login.component';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaffModule,
    AdminModule,
    StudentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
