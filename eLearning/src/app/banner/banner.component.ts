import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],




})
export class BannerComponent implements OnInit {
  carousel: string[];

  constructor() {
    this.carousel = ['full-stack developer.','ui/ux designer.', 'blogger.'];
  }

  ngOnInit() {
  }

}
