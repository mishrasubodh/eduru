import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PopupService } from '../services/popup.service'
import { AuthserviceService } from '../services/authservice.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailtest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private options: string[] = ["please select one", "teacher", "student"];

  register = {
    FirstName: '',
    lastName: '',
    DOB: '',
    category: '',
    Mob_no: '',
    email: '',
    Password: '',
    rePassword: '',
    termandcondition: '',
  }

  constructor(
    private router: Router,
    public msgService: PopupService,
    public authservice: AuthserviceService
  ) { }

  ngOnInit(): void {
  }
  gosignin() {
    this.router.navigate(['login']);
  }

  submit(registerData) { 
    try {
      if (registerData.FirstName == "") {
        this.msgService.openSnackBar('please enter first name', false)
        return;
      }
      if (registerData.lastName == "") {
        this.msgService.openSnackBar('please enter lastName', false)
        return;
      }
      if (registerData.DOB == "") {
        this.msgService.openSnackBar('please enter DOB', false)
        return;
      }
      if (registerData.category == "") {
        this.msgService.openSnackBar('please enter category', false)
        return;
      }
      if (registerData.Mob_no == "" || !(/^\d{10}$/.test(registerData.Mob_no))) {
        this.msgService.openSnackBar('please enter valid Mob_no', false)
        return;
      }
      if (registerData.email == "" || this.emailtest.test(String(registerData.email).toLowerCase()) == false) {
        this.msgService.openSnackBar('please enter valid email', false)
        return;
      }
      if (registerData.Password == "") {
        this.msgService.openSnackBar('please  enter password', false)
        return;
      }
      if (registerData.Password != registerData.rePassword) {
        this.msgService.openSnackBar('please  enter valid password', false)
        return;
      }
      if (registerData.termandcondition != true) {
        this.msgService.openSnackBar('please select termandcondition & condition', false)
        return;
      }
      registerData['user_name'] = registerData.email

      this.authservice.registration(registerData).subscribe(data => {
        console.log('data :', data)
        if (data['message'] == 'Success'){

          this.msgService.openSnackBar('registration successful', true)
        this.router.navigate(['login']);
        }
        else{
          this.msgService.openSnackBar(data['message'], false)
          return
        }
      })
      
    } catch (err) {
      console.log('err :>> ', err.message);
    }

  }




}
