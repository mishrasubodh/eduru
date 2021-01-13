import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VideoModalComponent} from "../modal/video-modal/video-modal.component"
@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openVideoModal(){
    console.log('openVideoModal is working')
    const dialogRef = this.dialog.open(VideoModalComponent,{
      height: '80vh',
      width: '100%',
      data: {
        animal: 'panda'
      }

    },);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
