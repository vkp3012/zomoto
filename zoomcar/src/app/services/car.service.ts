import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiEndPoint: string ="https://freeapi.miniprojectideas.com/api/ZoomCar/"
  constructor(private http:HttpClient) { }

  registerUser(Obj : any){
    debugger;
    return this.http.post(this.apiEndPoint + 'AddNewUser',Obj)
  }

  loginUser(obj : any){
    debugger;
    return this.http.post(this.apiEndPoint + "login",obj)
  }
  
}
