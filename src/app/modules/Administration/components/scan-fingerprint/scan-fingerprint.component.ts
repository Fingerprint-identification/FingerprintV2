import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-scan-fingerprint',
  templateUrl: './scan-fingerprint.component.html',
  styleUrls: ['./scan-fingerprint.component.scss']
})
export class ScanFingerprintComponent implements OnInit {
  ImgUploaded: boolean = false;

  constructor(private TokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // check if admin uploaded fingerprint image
    this.ImgUploaded = (this.TokenStorage.GetUserSignUpData("fingerprint")) ? true : false;
  }
  // image uploaded
  uploadImage(imageInput: any) {
    const file: File = imageInput.files[0];
    if (!file)
      return;
    // send file to python to return matrix

    // save matrix to upload it with data
    // this.TokenStorage.SaveUserSignUpData(fingerprint, "fingerprint");

  }
}
