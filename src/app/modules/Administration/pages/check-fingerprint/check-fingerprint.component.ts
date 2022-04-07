import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgAnalysisService } from '../../shared/services/img-analysis.service';
import { SignupService } from '../../shared/services/signup.service';

@Component({
  selector: 'app-check-fingerprint',
  templateUrl: './check-fingerprint.component.html',
  styleUrls: ['./check-fingerprint.component.scss', '../../shared/admin-global-style.scss']
})
export class CheckFingerprintComponent implements OnInit {
  ImgUploaded!: boolean;

  /**
  * @param signUpAuth to access methods inside signUp services
  * @param imgAnalysisAuth to access img services to send it for analysis
  */
  constructor(private signUpAuth: SignupService, private imgAnalysisAuth: ImgAnalysisService, private router: Router) { }

  ngOnInit(): void {
  }

  ImgAdded(event: any) {
    // select the file
    const file = event.target.files[0];
    // check if it's empty or not
    if (event.target.files.length > 0) {
      this.signUpAuth.imgUploaded(true);
      this.ImgUploaded = true;
      var formData = new FormData();
      formData.append("originalImg", file);
      this.imgAnalysisAuth.sendImgToCompare(formData)
        .then((result: any) => {
          if (result.status === 200) {
            this.signUpAuth.getUserById(result.message);
          } else if (result.status === 404) {
            alert("User not founded");
            this.faild();
          }
          this.ImgUploaded = false;
        }).catch((error: any) => {
          this.faild();
          alert(error.message);
        })
        alert("Request has been sent, wait...");
    }
    else {
      this.faild();
    }
  }
  faild(){
    this.signUpAuth.imgUploaded(false);
    this.ImgUploaded = false;
    this.router.navigate(['/Admin/checkFingerprint']);
  }
}
