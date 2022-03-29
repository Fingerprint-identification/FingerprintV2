import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-scan-fingerprint',
  templateUrl: './scan-fingerprint.component.html',
  styleUrls: ['./scan-fingerprint.component.scss']
})
export class ScanFingerprintComponent implements OnInit {
  ImgUploaded: boolean = false;

  constructor(private TokenStorage: TokenStorageService, private auth: AuthService) { }

  ngOnInit(): void {
    if (this.TokenStorage.GetUserSignUpData("fingerprint") === "false") {
      this.ImgUploaded = false;
    } else
      this.ImgUploaded = true;
  }
  // image uploaded
  uploadImage(event: any) {
    const file = event.target.files[0];
    if (event.target.files.length > 0) {
      this.ImgUploaded = true;
      var formdata = new FormData();
      formdata.append("originalImg", file);
      const requestOptions = {
        method: 'POST',
        body: formdata,
      };
      this.auth.sendImgToConvert(requestOptions)
      .then((result: any) =>{
        this.TokenStorage.SaveUserSignUpData(result.message, "fingerprint")
      })
    }
    else {
      this.ImgUploaded = false;
      this.TokenStorage.DeleteUserSignUpData("fingerprint");
    }
  }
}
