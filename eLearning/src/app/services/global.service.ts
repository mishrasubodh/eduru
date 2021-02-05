import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  Url: string = 'http://localhost:3300/routes/public/uploads'
 
  constructor() {}

  scrolData() {
    console.log(' scroolData is calling :>> ');
    window.scrollTo(0, 0);
  }
  
}


