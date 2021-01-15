import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor() {}

  scrolData() {
    console.log(' scroolData is calling :>> ');
    window.scrollTo(0, 0);
  }
}
