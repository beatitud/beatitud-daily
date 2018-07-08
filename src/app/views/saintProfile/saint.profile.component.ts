import { Component, OnInit, ViewChild } from '@angular/core';
import {NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF} from "ngx-image-gallery";
import * as $ from 'jquery';


@Component({
  selector: 'saint-profile',
  templateUrl: './saint.profile.component.html',
  styleUrls: ['./saint.profile.component.scss'],
  providers: [],
})
export class SaintProfileComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  // gallery images
  imagesList: GALLERY_IMAGE[];

  constructor() {
    this.imagesList = [
      {
        url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260",
        altText: 'woman-in-black-blazer-holding-blue-cup',
        title: 'woman-in-black-blazer-holding-blue-cup',
        thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
      },
      {
        url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260",
        altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
        extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
        thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
      },
    ];
    console.log(this.imagesList)
  }

  ngOnInit () {
    this.ngxImageGallery.images = this.imagesList
    this.closeGallery()
    this.openGallery()
  }

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    $('.mat-tab-body-active').css('z-index', '10 !important')
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    // this.ngxImageGallery.next(index);
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    // this.ngxImageGallery.prev(index);
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }


}
