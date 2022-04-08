import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { Customer } from '../customer';
import { Plant } from '../plant';
import { Planter } from '../planter';
import { Seed } from '../seed';
import { Login } from '../login';
import { Adminlogin } from '../adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _baseUrl = "http://localhost:9090/admin";
  private _customerBaseUrl = "http://localhost:9090/admin/customer";
  private _plantBaseUrl = "http://localhost:9090/admin/plant";
  private _planterBaseUrl = "http://localhost:9090/admin/planter";
  private _seedBaseUrl = "http://localhost:9090/admin/seed";


  username: string='';
  password:string='';

  set setUsername(valusername:string){
    this.username=valusername;
  }
  get getUsername():string{
    return this.username;
  }
  set setPassword(valpassword:string){
   this.password=valpassword;
 }
 get getPassword():string{
   return this.password;
 }

  //....................................Admin operations........................................
  constructor(private httpClient: HttpClient) { }
  getAdmin(username: string, password: string): Observable<Admin> {
    return this.httpClient.get<Admin>(`http://localhost:9090/admin/login/${username}/${password}`);
  }

  logout(): Observable<String> {
    return this.httpClient.get<String>(`http://localhost:9090/admin/logout`);
  }

  validateAdmin(username: string, password: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`http://localhost:9090/admin/login/${username}/${password}`);
  }
  loginAdmin(login: Adminlogin): Observable<Object> {
    return this.httpClient.post("http://localhost:9090/admin/login/", login , {responseType: 'text'});
  }

  getAdminUser(username: string): Observable<Admin>
  {
     return this.httpClient.get<Admin>(`http://localhost:9090/admin/getadmin/${username}`);
  }

  //.....................................Customer Operations.....................................
  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:9090/admin/customer/")
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`http://localhost:9090/admin/customer/${id}`);
  }

  getOrder(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`http://localhost:9090/admin/orders/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.patch(`http://localhost:9090/admin/customer/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:9090/admin/customer/${id}`);
  }

  //...................................Plant Operations.........................................
  getPlantList(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(`http://localhost:9090/admin/plant/`);
  }

  createPlant(plant: Plant): Observable<Object> {
    return this.httpClient.post(`http://localhost:9090/admin/plant/`, plant);
  }

  getPlantById(id: number): Observable<Plant> {
    return this.httpClient.get<Plant>(`http://localhost:9090/admin/plant/${id}`);
  }

  updatePlant(id: number, plant: Plant): Observable<Object> {
    return this.httpClient.put(`http://localhost:9090/admin/plant/${id}`, plant);
  }

  deletePlant(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:9090/admin/plant/${id}`);
  }

  //.....................................Planter Operations....................................
  getPlanterList(): Observable<Planter[]> {
    return this.httpClient.get<Planter[]>(`http://localhost:9090/admin/planter/`);
  }

  createPlanter(planter: Planter): Observable<Object> {
    return this.httpClient.post(`http://localhost:9090/admin/planter/`, planter);
  }
  getPlanterById(id: number): Observable<Planter> {
    return this.httpClient.get<Planter>(`http://localhost:9090/admin/planter/${id}`);
  }
  updatePlanter(id: number, planter: Planter): Observable<Object> {
    return this.httpClient.patch(`http://localhost:9090/admin/planter/${id}`, planter);
  }

  deletePlanter(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:9090/admin/planter/${id}`);
  }

  //............................................Seed operations...........................................
  getSeedList(): Observable<Seed[]> {
    return this.httpClient.get<Seed[]>(`http://localhost:9090/admin/seed/`);
  }

  createSeed(seed: Seed): Observable<Object> {
    return this.httpClient.post(`http://localhost:9090/admin/seed/`, seed);
  }
  getSeedById(id: number): Observable<Seed> {
    return this.httpClient.get<Seed>(`http://localhost:9090/admin/seed/${id}`);
  }
  updateSeed(id: number, seed: Seed): Observable<Object> {
    return this.httpClient.patch(`http://localhost:9090/admin/seed/${id}`, seed);
  }

  deleteSeed(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:9090/admin/seed/${id}`);
  }


}
