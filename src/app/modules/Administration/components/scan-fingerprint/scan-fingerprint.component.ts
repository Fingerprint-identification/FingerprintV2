import { Component, OnInit } from '@angular/core';
import { ImgAnalysisService } from '../../shared/services/img-analysis.service';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-scan-fingerprint',
  templateUrl: './scan-fingerprint.component.html',
  styleUrls: ['./scan-fingerprint.component.scss']
})
export class ScanFingerprintComponent implements OnInit {
  ImgUploaded: boolean = false;

  constructor(private signUpAuth: SignupService, private imgAnalysisAuth: ImgAnalysisService) { }

  ngOnInit(): void {
    if (this.signUpAuth.getUserSignUpData("fingerprint") === "false") {
      this.ImgUploaded = false;
    } else
      this.ImgUploaded = true;
  }
  // image uploaded
  uploadImage(event: any) {
    const file = event.target.files[0];
    if (event.target.files.length > 0) {
      this.ImgUploaded = true;
      var formData = new FormData();
      formData.append("originalImg", file);
      this.imgAnalysisAuth.sendImgToConvert(formData)
      .then((result: any) =>{
        this.signUpAuth.saveUserSignUpData(result.message, "fingerprint")
      })
    }
    else {
      this.ImgUploaded = false;
      this.signUpAuth.deleteUserSignUpData("fingerprint");
    }
  }
}
