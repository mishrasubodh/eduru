import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthserviceService } from "../services/authservice.service";
import { PopupService } from "../services/popup.service";
@Component({
  selector: "app-dashboard-profile",
  templateUrl: "./dashboard-profile.component.html",
  styleUrls: ["./dashboard-profile.component.scss"],
})
export class DashboardProfileComponent implements OnInit {
  currentTeacherData;
  teacherID;
  checked = false;
  bankdetail = false;
  user = {
    First_Name: "",
    Last_Name: "",
    Email: "",
    dob: "",
    mob_no: "",
    // Subject:'',
    fewWord: "",
  };

  bakInfo = {
    bankFirstName: "",
    bankLastName: "",
    bankName: "",
    BranchName: "",
    accountNo: "",
    ReAccountNo: "",
    IfscCode: "",
  };
  format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthserviceService,
    public msgService: PopupService
  ) {
    this.teacherID = localStorage.getItem("teacherID");
  }

  ngOnInit() {
    this.getTeacherInfo(this.teacherID);
    this.getTeacherBankInfo(this.teacherID);
  }
  getTeacherInfo(id) {
    this.authService.loginTeacherData(id).subscribe((data) => {
      if (data["message"] == "Success") {
        this.currentTeacherData = data["data"];
      }
      (this.user.First_Name = this.currentTeacherData.FirstName),
        (this.user.Last_Name = this.currentTeacherData.lastName),
        (this.user.Email = this.currentTeacherData.email),
        (this.user.dob = this.currentTeacherData.DOB),
        (this.user.mob_no = this.currentTeacherData.mob_no);
      //  this.user.Subject= this.currentTeacherData.,
      (this.user.fewWord = this.currentTeacherData.fewWord),
        (this.user["id"] = this.teacherID);
    });
  }

  submitTeacherInfo(teacherData) {
    try {
      if (teacherData.First_Name == "") {
        this.msgService.openSnackBar("please enter First_Name", false);
        return;
      }
      if (teacherData.Last_Name == "") {
        this.msgService.openSnackBar("please enter Last_Name", false);
        return;
      }
      if (teacherData.Email == "") {
        this.msgService.openSnackBar("please enter Email", false);
        return;
      }
      if (teacherData.dob == "") {
        this.msgService.openSnackBar("please enter dob", false);
        return;
      }
      if (teacherData.mob_no == "") {
        this.msgService.openSnackBar("please enter mob_no", false);
        return;
      }
      this.authService.updateTeacher(teacherData).subscribe((data) => {
        if (data["message"] == "Success") {
          this.msgService.openSnackBar("updateData successfuly", true);
          this.getTeacherInfo(data["data"]._id);
        } else {
          this.msgService.openSnackBar(data["message"], false);
          return;
        }
      });
    } catch (err) {
      console.log("err.message :", err.message);
    }
  }

  getTeacherBankInfo(id) {
    this.authService.getTeacherBankDetail(id).subscribe((data) => {
      if ((data["message"] = "Success")) {
        this.bakInfo.bankFirstName = data["data"].bankFirstName;
        this.bakInfo.bankLastName = data["data"].bankLastName;
        this.bakInfo.bankName = data["data"].bankName;
        this.bakInfo.BranchName = data["data"].bankFirstName;
        this.bakInfo.accountNo = data["data"].accountNo;
        this.bakInfo.ReAccountNo = data["data"].ReAccountNo;
        this.bakInfo.IfscCode = data["data"].IfscCode;
      } else {
        this.bankdetail = true;
      }
    });
  }

  submitTeacherBanckInf(bankData) {
    try {
      if (bankData.bankFirstName == "") {
        this.msgService.openSnackBar("please enter bankFirstName", false);
        return;
      }
      if (bankData.bankLastName == "") {
        this.msgService.openSnackBar("please enter bankLastName", false);
        return;
      }
      if (bankData.bankName == "") {
        this.msgService.openSnackBar("please enter bankName", false);
        return;
      }
      if (bankData.BranchName == "") {
        this.msgService.openSnackBar("please enter BranchName", false);
        return;
      }
      if (bankData.accountNo == "") {
        this.msgService.openSnackBar("please enter accountNo", false);
        return;
      }
      if (bankData.accountNo == "") {
        this.msgService.openSnackBar("please enter accountNo", false);
        return;
      }
      if (bankData.ReAccountNo == "") {
        this.msgService.openSnackBar("please enter ReAccountNo", false);
        return;
      }
      if (bankData.accountNo != bankData.ReAccountNo) {
        this.msgService.openSnackBar("account number sre not same", false);
        return;
      }

      if (bankData.IfscCode == "" && this.format.test(bankData.IfscCode)) {
        this.msgService.openSnackBar("please  enter IfscCode", false);
        return;
      }
      bankData["TeacherId"] = this.teacherID;
      this.authService.addTeacherBandDetail(bankData).subscribe((data) => {
        if (data["message"] == "Success") {
          this.msgService.openSnackBar("BankData successful Saved", true);
        } else {
          this.msgService.openSnackBar(data["message"], false);
          return;
        }
      });
    } catch (err) {
      console.log("err :>> ", err.message);
    }
  }

  openDashboardProfile() {
    this.checked = !this.checked;
  }
  openbaankdetail() {
    this.bankdetail = !this.bankdetail;
  }
}
