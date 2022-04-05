import { Injectable } from '@angular/core';

import { ImgAnalysisApiService } from './img-analysis-api.service';
import { SignupService } from './signup.service';

/**
 * @ImgAnalysisService in this services we send image to ImgAnalysisServiceApi to
 * and here we handle errors
 */
@Injectable({
  providedIn: 'root'
})
export class ImgAnalysisService {

  /**
   * @param api access ImgAnalysisApiService to send data to server side
   */
  constructor(private signUpAuth: SignupService, private api: ImgAnalysisApiService) {
  }
  /**
   * This function send request to api and wait for the matrix returned
   * from api
   * @param ImgFormData this image of the user data
   * @returns json()
   */
  async sendImgToConvert(ImgFormData: any) {
    let response = await this.api.sendImgToConvert(ImgFormData);
    if (response.status === 500)
      return { message: "Opps, Fingerprint has error" };
    if (response.status === 200) {
      response = response.json();
      return response;
    }
  }
  /**
   * This function send request to api and wait for the id returned
   * from api
   * @param ImgFormData this image of the user data
   * @returns json()
   */
  async sendImgToCompare(ImgFormData: any): Promise<any> {
    let response = await this.api.sendImgToCompare(ImgFormData);
    if (response.status === 500)
      return { message: "Opps, Fingerprint has error" };
    if (response.status === 200) {
      response = response.json();
      return response;
    }
  }
}
