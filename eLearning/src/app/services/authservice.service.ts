import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
url="http://localhost:3300/dashboard/"
//http://192.168.1.154:3300/dashboard/5ffff461509d96372a41a5d4/UploadFile
 token = localStorage.getItem('token')

 httpOptions =  new HttpHeaders({
   'Content-Type': 'application/json',
   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
   "Access-Control-Allow-Origin": "*",
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
})
  constructor(
    private http: HttpClient,
  ) { }

  registration(urseData){
    console.log('urseData on registration api:>> ', urseData);
    return this.http.post(this.url+`registration`,urseData,{headers:this.httpOptions})
  }

  sendOtp(urseData){
    console.log('urseData  in sent otp api:>> ', urseData);
    return this.http.post(this.url+`registration/sendOtp/${urseData}`,{headers:this.httpOptions})
  }

  varifyOtp(urseData){
    console.log('urseData  in sent otp varify api:>> ', urseData);
    return this.http.post(this.url+`registration/vareyfyOtp/${urseData}`,{headers:this.httpOptions})
  }

  updateTeacher(Teacher){
  
    return this.http.post(this.url+`registration/upDateTeacher`,Teacher,{headers:this.httpOptions})
  }

  loginData(urseData){
    return this.http.post(this.url+`login`,urseData)
  }
  loginTeacherData(id){ 
    return this.http.post(this.url+`teacherInfobyID/${id}`,{headers:this.httpOptions})
  }

addTeacherBandDetail(data){
  return this.http.post(this.url+`bankDetails`,data,{headers:this.httpOptions})
}

getTeacherBankDetail(data){
 
  return this.http.get(this.url+`bankDetails/getDetail/${data}`,{headers:this.httpOptions})
}
   
getCategory(){
  return this.http.get(this.url+`category_subcategory`,{headers:this.httpOptions})
}

  addCoures(id,data){ 
    console.log("data on add course api",data)
     return this.http.post(this.url+`${id}/SaveFileWithDetail`,data,{headers:this.httpOptions})
    // http://192.168.1.154:3300/dashboard/600a9c2489a0de3237afb4a2/SaveFileWithDetail
  }
  uploadVideo(id,data){
    return this.http.post(this.url+`${id}/UploadFile`,data)
    // http://localhost:3300/dashboard/5ffc337c8001fe195083e022/UploadFile
  }
 
getDataOnCategory(cat){
  console.log('cat :>> ', cat);
 return this.http.get(this.url+`material-byCategory/${cat}`,{headers:this.httpOptions})

}

}
