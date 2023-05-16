import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SigninComponent } from './signin/signin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NursesComponent } from './nurses/nurses.component';
import { ChambreComponent } from './chambre/chambre.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { AuthComponent } from './auth/auth.component';
import { PatientsComponent } from './patients/patients.component';
import { DocPatientComponent } from './doc-patient/doc-patient.component';
const routes: Routes = [
 
{path:'',component:AuthComponent},
{path:'inscription',component:InscriptionComponent},
{path:'dashbord',component:DashbordComponent},
{path:'appointment',component:AppointmentComponent},
{path:'nurses',component:NursesComponent},
{path:'chambre',component:ChambreComponent},
{path:'pharmacien',component:PharmacienComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'doc',component:DocPatientComponent},
  {path:'patient',component:PatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
