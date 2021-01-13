import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {

  constructor(
    
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog
  ) { 
    console.log('data :>> ', data);
  }

  ngOnInit() {
  }
closeModal(){
this.dialog.closeAll()
}


}
