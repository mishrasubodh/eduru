import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PopupService } from "../services/popup.service";
import { AuthserviceService } from "../services/authservice.service";
@Component({
  selector: "app-verify-otp",
  templateUrl: "./verify-otp.component.html",
  styleUrls: ["./verify-otp.component.scss"],
})
export class VerifyOtpComponent implements OnInit {
  otp: String = "";
  userData;
  timeLeft: number = 10;
  interval;
  sendAgain: boolean = false;
  subscribeTimer: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public msgService: PopupService,
    public authservice: AuthserviceService
  ) {
    this.startTimer();
    this.userData = JSON.parse(this.route.snapshot.paramMap.get("data"));
    console.log("this.userData :>> ", this.userData);
  }

  ngOnInit() {}
  gosignin() {
    this.router.navigate(["register"]);
  }

  sendOtpAgain() {
    this.authservice.sendOtp(this.userData["email"]).subscribe(
      (data) => {
        if (data["message"] == "Otp Send Successfully") {
          this.msgService.openSnackBar("Otp Send Successfully", true);
        }
      },
      (err) => {
        this.msgService.openSnackBar("Otp not send", false);
      }
    );
  }

  async varifyOtpData(otpnumber) {
    let otp = await this.returnNumber(otpnumber);
    console.log("otpotp :>> ", otp);
    this.authservice.varifyOtp(otp).subscribe(
      (data) => {
        if (data["message"] == "otp is correct") {
          this.msgService.openSnackBar("Otp varify Successfully", true);
          this.registerUserData(this.userData);
        } else {
          this.msgService.openSnackBar(data["message"], false);
        }
      },
      (err) => {
        this.msgService.openSnackBar("Otp not varify", false);
      }
    );
    console.log("sendOtpISworking");
    this.timeLeft = 10;
    this.interval;
    this.startTimer();
  }
  async returnNumber(myNumber) {
    if (myNumber.toString().length < 2) {
      console.log("comingi n length  :>> ", myNumber.toString().length);
      return "0" + "0" + "0" + myNumber;
    }
    if (myNumber.toString().length < 3) {
      console.log("comingi n length  :>> ", myNumber.toString().length);
      return "0" + "0" + myNumber;
    }
    if (myNumber.toString().length < 4) {
      console.log("comingi n length  :>> ", myNumber.toString().length);
      return "0" + myNumber;
    } else {
      return myNumber;
    }
  }
  registerUserData(userdata) {
    userdata["user_name"] = userdata.email;

    console.log("userdata userdata  :>> ", userdata);
    this.authservice.registration(userdata).subscribe(
      (data) => {
        if (data["message"] == "Success") {
          console.log("data on res :>> ", data);
          this.msgService.openSnackBar("registration Successfull", true);
          // this.router.navigate(["dashboard", data["data"]._id]);
          this.router.navigate(["login"]);
        }
      },
      (err) => {
        this.msgService.openSnackBar("data not registered", false);
      }
    );
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      if (this.timeLeft == 0) {
        this.sendAgain = true;
      } else {
        this.sendAgain = false;
      }
      // else {
      //   this.timeLeft = 60;
      // }
    }, 1000);
  }
}
