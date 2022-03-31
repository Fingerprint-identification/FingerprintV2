import { Injectable } from '@angular/core';

import { ImgAnalysisApiService } from './img-analysis-api.service';

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
  constructor(private api: ImgAnalysisApiService) {
  }
  /**
   * This function send request to api and wait for the matrix returned
   * from api
   * @param ImgFormData this image of the user data
   * @returns json()
   */
  async sendImgToConvert(ImgFormData: any) {
    const response = await this.api.sendImgToConvert(ImgFormData);
    return response.json();
  }
}
