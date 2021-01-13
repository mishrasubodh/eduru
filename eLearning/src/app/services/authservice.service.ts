import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
url="http://localhost:3300/dashboard/"
 
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
    console.log('Teacher :', Teacher)
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
  console.log('data :>> ', data);
  return this.http.get(this.url+`bankDetails/getDetail/${data}`,{headers:this.httpOptions})
}

  addCoures(id){ 
    console.log('id :>> ', id);
    // return this.http.post(this.url+`teacherInfobyID/${id}`,this.options)
  }
 // {queryParams: { teacherId: id}}/,
}
