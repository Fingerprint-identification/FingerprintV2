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
    if(this.TokenStorage.GetUserSignUpData("fingerprint") === "false"){
      this.ImgUploaded = false;
    }else
      this.ImgUploaded = true;
  }
  // image uploaded
  uploadImage(imageInput: any) {
    const file: File = imageInput.files[0];
    if(file){
      this.TokenStorage.SaveUserSignUpData("ss", "fingerprint");
      this.ImgUploaded = true;
    }
    else{
      this.ImgUploaded = false;
      this.TokenStorage.DeleteUserSignUpData("fingerprint");
    }
    // save matrix to upload it with data
    // this.TokenStorage.SaveUserSignUpData(file, "fingerprint");
    // send file to python to return matrix

  }
}
