import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AddEditDocteurComponent } from './doctors/add-edit-docteur/add-edit-docteur.component';

import { InscriptionComponent } from './inscription/inscription.component';

import { SigninComponent } from './signin/signin.component';
import { DashbordComponent } from './dashbord/dashbord.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { FormGroup } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddEditRdvComponent } from './add-edit-rdv/add-edit-rdv.component';
import { NursesComponent } from './nurses/nurses.component';
import { AddEditnursesComponent } from './nurses/add-editnurses/add-editnurses.component';
import { ChambreComponent } from './chambre/chambre.component';
import { AddEditChambreComponent } from './chambre/add-edit-chambre/add-edit-chambre.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { AddEditPharmacienComponent } from './pharmacien/add-edit-pharmacien/add-edit-pharmacien.component';
import { PatientsComponent } from './patients/patients.component';
import { AddEditPatientComponent } from './patients/add-edit-patient/add-edit-patient.component';
import { RevenuComponent } from './doctors/revenu/revenu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { NumberAppointmentComponent } from './number-appointment/number-appointment.component';
import { DocPatientComponent } from './doc-patient/doc-patient.component';
import { AddEditDoctPatientComponent } from './docPatient/add-edit-doct-patient/add-edit-doct-patient.component';

@NgModule({
  declarations: [
    AppComponent,
  
    DoctorsComponent,
    NavbarComponent,
    AddEditDocteurComponent,

    InscriptionComponent,
     SigninComponent,
     DashbordComponent,
     AppointmentComponent,
     AddEditRdvComponent,
     NursesComponent,
     AddEditnursesComponent,
     ChambreComponent,
     AddEditChambreComponent,
     PharmacienComponent,
     AddEditPharmacienComponent,
     PatientsComponent,
     AddEditPatientComponent,
     RevenuComponent,
     RegisterComponent,
     LoginComponent,
     AuthComponent,
     NumberAppointmentComponent,
     DocPatientComponent,
     AddEditDoctPatientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTabsModule, HttpClientModule,MatButtonModule,MatIconModule,MatInputModule,MatDatepickerModule,MatSelectModule,MdbCarouselModule,NgbModalModule ,MatDialogModule,MatNativeDateModule,BrowserAnimationsModule,ReactiveFormsModule,FormsModule,MatProgressSpinnerModule
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
