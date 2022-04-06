import { Injectable } from '@angular/core';

const Img_API = "https://a8a2-197-54-89-102.ngrok.io//";

@Injectable({
  providedIn: 'root'
})
export class ImgAnalysisApiService {

  constructor() { }

  sendImgToConvert(ImgFormData: any): Promise<any> {
    const requestOptions = {
      method: 'POST',
      body: ImgFormData,
    };
    return fetch(Img_API + "convertImageToMatrix", requestOptions);
  }

  sendImgToCompare(ImgFormData: any): Promise<any> {
    const requestOptions = {
      method: 'POST',
      body: ImgFormData,
    };
    return fetch(Img_API + "compareBetweenTwoMatrices", requestOptions);
  }
}
