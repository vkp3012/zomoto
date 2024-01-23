import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'zoomcar';

  registerObj : any = {
    "userId": 0,
    "name": "",
    "userRole": "",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  }

  loginObj : any = {
    "userId": 0,
    "name": "ll",
    "userRole": "ll",
    "emailId": "",
    "mobileNo": "ll",
    "password": "",
    "createdOn": new Date()
  }

  constructor(private carService:CarService){

  }

  myImage:string = "../assets/images/FINAL-LOGO_Color.png"

  onRegister(){
    debugger;
    this.carService.registerUser(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Registration Success")
        this.closeRegister()
      }else{
        alert(res.message)
      }
    })
  }

  onLogin(){

  }



  openRegister() {
    const model = document.getElementById("registerModal")
    if(model != null){
      model.style.display = "block"
    }
  }

  closeRegister() {
    const model = document.getElementById("registerModal")
    if(model != null){
      model.style.display = "none"
    }
  }

  openLogin() {
    const model = document.getElementById("loginModal")
    if(model != null){
      model.style.display = "block"
    }
  }

  closeLogin() {
    const model = document.getElementById("loginModal")
    if(model != null){
      model.style.display = "none"
    }
  }
}
