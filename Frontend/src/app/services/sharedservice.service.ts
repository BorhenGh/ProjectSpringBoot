
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject,tap } from 'rxjs';
import { Doctor } from '../Models/Doctor';
import { RendezVous } from '../Models/RendezVous';
import { Nurses } from '../Models/Nurses';
import { chambre } from '../Models/chambres';
import { Pharmacien } from '../Models/Pharmacien';
import { RegisterComponent } from '../register/register.component';
import { AuthenticationRequest } from '../Models/authentification-request';
import { RegisterRequest } from '../Models/register-request';
import { Utilisateur } from '../Models/Utilisateur';
import { Patient } from '../Models/Patient';
import { DocuementsPatients } from '../Models/DocumentsPatients';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  readonly ApiUrl = " https://localhost:8080/";
  private apiUrl = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {

  }
  private  refreshrequired = new Subject<void>();
  get RequiredRefresh(){
    return this.refreshrequired
  }
  UpdateDoctor(id: any, reserdata: any): Observable<Doctor> {
    return this.http.put<Doctor>('http://localhost:8080/Med/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateDocP(id: any, reserdata: any): Observable<DocuementsPatients> {
    return this.http.put<DocuementsPatients>('http://localhost:8080/documentsP/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdatePharmacien(id: any, reserdata: any): Observable<Pharmacien> {
    return this.http.put<Pharmacien>('http://localhost:8080/pharm/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateNurses(id: any, reserdata: any): Observable<Nurses> {
    return this.http.put<Nurses>('http://localhost:8080/nurses/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateRoom(id: any, reserdata: any): Observable<chambre> {
    return this.http.put<chambre>('http://localhost:8080/chambres/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdatePatient(id: any, reserdata: any): Observable<Patient> {
    return this.http.put<Patient>('http://localhost:8080/patients/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }

  UpdateRendezVous(id: any, reserdata: any): Observable<RendezVous> {
    return this.http.put<RendezVous>('http://localhost:8080/rdv/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
    
  supprimerRdv(data: any) {
    return this.http.delete('http://localhost:8080/rdv/' + data);

  }
  supprimerDoctP(data: any) {
    return this.http.delete('http://localhost:8080/documentsP/' + data);

  }
  supprimerPharmacien(data: any) {
    return this.http.delete('http://localhost:8080/pharm/' + data);

  }
  supprimerPatient(data: any) {
    return this.http.delete('http://localhost:8080/patients/delete/' + data);

  }
  supprimerNurses(data: any) {
    return this.http.delete('http://localhost:8080/nurses/' + data);

  }
  supprimerRooms(data: any) {
    return this.http.delete('http://localhost:8080/chambres/' + data);

  }
  getRdvById(id: any): Observable<RendezVous> {
    return this.http.get<RendezVous>( 'http://localhost:8080/rdv/' + id);
  } 
  getDoctPById(id: any): Observable<DocuementsPatients> {
    return this.http.get<DocuementsPatients>( 'http://localhost:8080/documentsP/' + id);
  }
  getPatientById(id: any): Observable<Patient> {
    return this.http.get<Patient>( 'http://localhost:8080/patients/' + id);
  }
  getNursesById(id: any): Observable<Nurses> {
    return this.http.get<Nurses>( 'http://localhost:8080/nurses/' + id);
  }
  getPharmById(id: any): Observable<Pharmacien> {
    return this.http.get<Pharmacien>( 'http://localhost:8080/pharm/' + id);
  }
  getRoomById(id: any): Observable<chambre> {
    return this.http.get<chambre>( 'http://localhost:8080/chambres/' + id);
  }
  saveRdv(data: any) {
    return this.http.post('http://localhost:8080/rdv/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  savePatient(data: any) {
    return this.http.post('http://localhost:8080/patients/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
 
  savePharmacien(data: any) {
    return this.http.post('http://localhost:8080/pharm/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  saveDoctP(data: any) {
    return this.http.post('http://localhost:8080/documentsP/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  saveNurses(data: any) {
    return this.http.post('http://localhost:8080/nurses/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  savechambre(data: any) {
    return this.http.post('http://localhost:8080/chambres/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }



  getAllrdv(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/rdv/All');
  }
  getAllDoctP(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/documentsP/all');
  }
  getAllPatient(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/patients/All');
  }
  getAllPharmaciens(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/pharm/all');
  }
  getAllrooms(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/chambres/all');
  }
  getAllnurses(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/nurses/all');
  }
  supprimerDoct(data: any) {
    return this.http.delete('http://localhost:8080/Med/delete/' + data);

  }
  
  getDoctorById(id: any): Observable<Doctor> {
    return this.http.get<Doctor>( 'http://localhost:8080/Med/' + id);
  } 
  getAllmedecin(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/Med/All');
  }
  getAllpatient(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/patients/All');
  }
  saveDoctor(data: any) {
    return this.http.post('http://localhost:8080/Med/create', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  getRevenuMedecin(idMedecin: number, startDate: Date, endDate: Date): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/rdv/getRevenuMedecin/${idMedecin}/${startDate}/${endDate}`);
  }
  registerUser(request: RegisterRequest): Observable<Utilisateur> {
    const url = `${this.apiUrl}/registerr`;
    return this.http.post<Utilisateur>(url, request);
  }
  loginUser(request: AuthenticationRequest): Observable<Utilisateur> {
    const url = `${this.apiUrl}/loginn`;
    return this.http.post<Utilisateur>(url, request);
  }
  getNombreMedecin(){
   return this.http.get<number>('http://localhost:8080/Med/getnombreMedecin');
  }
  getNombreRooms(){
    return this.http.get<number>('http://localhost:8080/chambres/countRoom');
  }
  getNombreAppointment(){
    return this.http.get<number>('http://localhost:8080/rdv/countRendezvous');
  }
  getNombreNurses(){
    return this.http.get<number>('http://localhost:8080/nurses/countNurses');
  }
  getNombrePatients(){
    return this.http.get<number>('http://localhost:8080/patients/countPatient');
  }
  getNombrePharm(){
    return this.http.get<number>('http://localhost:8080/pharm/countPh');
  }
  getNombreRdvByDoc(idmedecin:number){
    return this.http.get<number>(`http://localhost:8080/rdv/getNbrRendezVousMedecin/${idmedecin}`);
  }
}
