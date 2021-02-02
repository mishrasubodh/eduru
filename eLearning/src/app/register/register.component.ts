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
   options: string[] = ["please select one", "teacher", "student"];

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

 async submit(registerData) { 
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
      // registerData["user_name"] = registerData.email;
      //   console.log('userdata userdata  :>> ', registerData);
      //   this.authservice.registration(registerData).subscribe(
      //     (data) => {
      //       if (data["message"] == "Success") {
      //         console.log('data on res :>> ', data);
      //         this.msgService.openSnackBar("registration Successfull", true);
      //       //  this.router.navigate(['dashboard',]);
      //       }
      //     },
      //     (err) => {
      //       this.msgService.openSnackBar("data not registered", false);
      //     }
      //   );
      



       let otpDetail= await this.sendOtpData(registerData.email)
       console.log('otpDetai otpDetai :>> ', otpDetail);
      if(otpDetail=='Otp Send Successfully'){
         this.router.navigate(['otp',JSON.stringify(registerData)]);
      }
    } catch (err) {
      console.log('err :>> ', err.message);
    }

  }

 sendOtpData(email){
    return  new Promise((resolve, reject) => {
    this.authservice.sendOtp(email).subscribe(data => {
      if(data['message']=='Otp Send Successfully')
      this.msgService.openSnackBar('Otp Send Successfully', true)
      resolve(data['message'])
    },(err) =>{
      reject('otp not send')
      this.msgService.openSnackBar('otp not send', false)
    })
  })
}




}
