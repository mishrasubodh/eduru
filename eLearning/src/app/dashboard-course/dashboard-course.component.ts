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
  myFiles: string[] = [];
  imgFiles: string[] = [];
  videoPath:[]
  enableSaveBtn:boolean=false
  sMsg: string = "";
  teacherID;
  category = [];
  subCategory = [];
  selectSubCat = [];
  course = {
    courseName: "",
    category: "",
    SubCategory: "",
    amount: "",
    description: "",
  
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
 
  getimgFileDetails(e) {
    //. this.imgFiles.push(e.target.files[0]);
    // this.frmData.append("fileUpload", e.target.files[0]);
    // console.log("this.imgFilesthis.imgFiles :>> ", this.imgFiles);
  }
  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles);
  }
  
  uploadFiles() {
  const  frmData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      console.log("comning in side loop");
     frmData.append("material", this.myFiles[i]);
      if (i == this.myFiles.length - 1) {
        console.log("comning out side loop");
        this.services
          .uploadVideo(this.teacherID, frmData)
          .subscribe((data:[]) => {
            console.log("data :", data.length);
            if (data.length>0) {
              this.videoPath=data
              this.enableSaveBtn=true;
              this.msgService.openSnackBar("video uploaded successful", true);
              // data.forEach(el=>{
              // this.videoPath.push(el)
              // })
              
             // this.router.navigate(["login"]);
            } else {
           
              this.enableSaveBtn=false;
            }
          });
      }
    }
  }
  submit(courseData) {
    try {
     
        if (courseData.category == "") {
          this.msgService.openSnackBar("please enter category", false);
          return;
        }
        if (courseData.SubCategory == "") {
          this.msgService.openSnackBar("please enter SubCategory", false);
          return;
        }
        if (courseData.description == "") {
          this.msgService.openSnackBar("please enter description", false);
          return;
        }
        if (courseData.name == "") {
          this.msgService.openSnackBar("please enter courseName", false);
          return;
        }

        if (courseData.amount == "") {
          this.msgService.openSnackBar("please  enter amount", false);
          return;
        }
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
        // } teacherId

        courseData['teacherId']=this.teacherID
        courseData['videoPath']=this.videoPath
        this.services
          .addCoures(this.teacherID,courseData)
          .subscribe((data) => {
            console.log("data :", data);
            if (data["message"] == "success") {
              this.msgService.openSnackBar("course added successful", true);
             // this.router.navigate(["login"]);
            } else {
              // this.msgService.openSnackBar(data["message"], false);
              // return;
            }
          },err=>{
            this.msgService.openSnackBar("course not added ", false);
               return;
          });
      
    } catch (err) {
      console.log("err :>> ", err.message);
    }
  }
}
