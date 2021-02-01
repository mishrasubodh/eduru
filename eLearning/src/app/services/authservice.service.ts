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
    return this.http.post(this.url+`registration`,urseData,{headers:this.httpOptions})
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
    
     return this.http.post(this.url+`${id}/UploadFile`,data,{headers:this.httpOptions})

    // http://192.168.1.154:3300/dashboard/5ffff461509d96372a41a5d4/UploadFile

   // http://localhost:3300/dashboard/5ffc337c8001fe195083e022/UploadFile
  }
 // {queryParams: { teacherId: id}}/,
}
