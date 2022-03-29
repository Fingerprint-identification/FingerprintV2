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
    // if (this.TokenStorage.GetUserSignUpData("fingerprint") === "false") {
    //   this.ImgUploaded = false;
    // } else
    //   this.ImgUploaded = true;
  }
  // image uploaded
  uploadImage(event: any) {
    const file = event.target.files[0];
    if (1) {
      var formdata = new FormData();
      formdata.append("originalImg", file);
      const requestOptions = {
        method: 'POST',
        body: formdata,
      };
      this.auth.sendImgToConvert(requestOptions).then(response => response.json())
      .then((result: any) =>{
        console.log("result.message", result.message)
        console.log("result", result)
        this.TokenStorage.SaveUserSignUpData(result.message, "fingerprint")
      }
      )

      // this.ImgUploaded = true;
      // this.auth.sendImgToConvert(formData).subscribe(
      //   (data: any) => {
      //     console.log("G", data);
      //   }
      // );
    }
    else {
      this.ImgUploaded = false;
      this.TokenStorage.DeleteUserSignUpData("fingerprint");
    }
    // save matrix to upload it with data
    // this.TokenStorage.SaveUserSignUpData(file, "fingerprint");
    // send file to python to return matrix

  }
}
