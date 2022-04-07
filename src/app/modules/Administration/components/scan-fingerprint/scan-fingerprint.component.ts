import { Component, OnInit } from '@angular/core';

import { ImgAnalysisService } from '../../shared/services/img-analysis.service';

import { SignupService } from '../../shared/services/signup.service';

/**
 * @ScanFingerprintComponent here we scan fingerprint and send file to api
 */
@Component({
  selector: 'app-scan-fingerprint',
  templateUrl: './scan-fingerprint.component.html',
  styleUrls: ['./scan-fingerprint.component.scss']
})
export class ScanFingerprintComponent implements OnInit {
  // Local storage to check if the img uploded successfully or not
  ImgUploaded: boolean = false;

  /**
   * @param signUpAuth to access methods inside signUp services
   * @param imgAnalysisAuth to access img services to send it for analysis
   */
  constructor(private signUpAuth: SignupService, private imgAnalysisAuth: ImgAnalysisService) { }

  ngOnInit(): void {
    // checking if image uploaded to active html image with green if true else active gray image
    this.ImgUploaded = (this.signUpAuth.getThisDataWithThisNameFromCookies("fingerprint") === "false") ? false : true;;
  }
  /**
   * method that detect the image uploaded and make operation in it
   * @param event it's the file detected by function
   * @returns void
   */
  uploadImage(event: any): void {
    // select the file
    const file = event.target.files[0];
    // check if it's empty or not
    if (event.target.files.length > 0) {
      this.ImgUploaded = true;
      var formData = new FormData();
      formData.append("originalImg", file);
      this.imgAnalysisAuth.sendImgToConvert(formData)
        .then((result: any) => {
          this.signUpAuth.deleteThisDataWithThisNameFromCookies("fingerprint");
          this.signUpAuth.saveThisDataWithThisNameInCookies(result.message, "fingerprint")
        }).catch((error) => {
          this.faild();
          alert(error.message);
        })
    }
    else {
      this.faild();
    }
  }
  faild() {
    this.ImgUploaded = false;
    this.signUpAuth.deleteThisDataWithThisNameFromCookies("fingerprint");
  }
}
