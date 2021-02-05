import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  //Url: string = 'http://localhost:3300/dashboard/img/bg5'
  Url: string = 'http://localhost:3300/dashboard/screenshotsImg/bg5.png'
  
  constructor() {}

  scrolData() {
    console.log(' scroolData is calling :>> ');
    window.scrollTo(0, 0);
  }
  
}


