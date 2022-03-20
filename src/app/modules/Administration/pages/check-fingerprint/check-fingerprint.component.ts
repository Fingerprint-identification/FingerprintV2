import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-fingerprint',
  templateUrl: './check-fingerprint.component.html',
  styleUrls: ['./check-fingerprint.component.scss','../../global-style/admin-global-style.scss']
})
export class CheckFingerprintComponent implements OnInit {
  ImgUploaded : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ImgAdded(imageInput: any){
    const file: File = imageInput.files[0];
    if(file)
      this.ImgUploaded = true;
    else
      this.ImgUploaded = false;
  }

}
