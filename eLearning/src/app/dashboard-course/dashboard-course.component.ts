import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material";
import { AuthserviceService } from "../services/authservice.service";
import { PopupService } from "../services/popup.service";
// import { MatFileUploadModule } from 'angular-material-fileupload';
@Component({
  selector: "app-dashboard-course",
  templateUrl: "./dashboard-course.component.html",
  styleUrls: ["./dashboard-course.component.scss"],
})
export class DashboardCourseComponent implements OnInit {
  myFiles : string[] = [];
  imgFiles: string[] = [];
  sMsg: string = "";
  teacherID;
  category = [];
  subCategory = [];
  selectSubCat = [];
  course = {
    name: "",
    category: "",
    SubCategory: "",
    amount: "",
    description: "",
    videoUrl: "",
  };
  constructor(
    private router: Router,
    public services: AuthserviceService,
    public msgService: PopupService
  ) {
    this.teacherID = localStorage.getItem("teacherID");
  }

  ngOnInit() {
    this.categoryes();
  }
  openDashboardCourseView() {
    this.router.navigate(["dashboard-course-view"]);
  }
  async SelectCat(selectCat) {
    this.course.category = selectCat.name;
    this.selectSubCat = this.subCategory.filter(
      (o) => o.parentId == selectCat.id
    );
  }
  SelectSubCat(subCat) {
    this.course.SubCategory = subCat.name;
  }
  categoryes() {
    this.services.getCategory().subscribe((data) => {
      console.log("data :>> ", data);
      if (data != null || data != undefined) {
        this.category = data["category"];
        this.subCategory = data["subCategory"];
      }
    });
  }
  frmData = new FormData();
  getimgFileDetails(e) {
   //. this.imgFiles.push(e.target.files[0]);
   // this.frmData.append("fileUpload", e.target.files[0]);
   // console.log("this.imgFilesthis.imgFiles :>> ", this.imgFiles);
  }
  getFileDetails(e) {
    console.log('object :>> ', e.target.files[0]);
    this.myFiles.push(e.target.files[0]);
    console.log('object :>>', this.myFiles)
   // this.frmData.append("material",e.target.files[0]);
   return this.myFiles
  }

  submit(courseData) {
    try {
      // if (courseData.category == "") {
      //   this.msgService.openSnackBar("please enter category", false);
      //   return;
      // }
      // if (courseData.SubCategory == "") {
      //   this.msgService.openSnackBar("please enter SubCategory", false);
      //   return;
      // }
      // if (courseData.description == "") {
      //   this.msgService.openSnackBar("please enter description", false);
      //   return;
      // }
      // if (courseData.name == "") {
      //   this.msgService.openSnackBar("please enter courseName", false);
      //   return;
      // }

      // if (courseData.amount == "") {
      //   this.msgService.openSnackBar("please  enter amount", false);
      //   return;
      // }
      // if (this.myFiles.length <= 0) {
      //   this.msgService.openSnackBar("please  please add video", false);
      //   return;
      // }
      // if (this.imgFiles.length <= 0) {
      //   this.msgService.openSnackBar(
      //     "please select termandcondition & condition",
      //     false
      //   );
      //   return;
      // }
      
      //this.frmData.append("material", this.myFiles);
      this.frmData.append("category", courseData.category);
      this.frmData.append("subCategory", courseData.SubCategory);
      this.frmData.append("description",courseData.description);
      this.frmData.append("name",courseData.name);
      this.frmData.append("amount",courseData.amount); 
      this.frmData.append("teacherId",this.teacherID);
      
      //console.warn(' this.frmData this.frmData :>> ',  this.frmData);
     // console.log('this.frmData :>> >>>>>>>>>>>>>>>>>>>>>>>',  this.frmData);
      for (var value of this.frmData['values']()) {
        console.log("dddddddddddd",value);
     }
      this.services.addCoures(this.teacherID,this.frmData).subscribe((data) => {
           console.log("data :", data);
          if (data["message"] == "Success") {
          this.msgService.openSnackBar("course added successful", true);
          this.router.navigate(["login"]);
          } else {
          this.msgService.openSnackBar(data["message"], false);
          return;
        }
      });
    } catch (err) {
      console.log("err :>> ", err.message);
    }
  }
}
