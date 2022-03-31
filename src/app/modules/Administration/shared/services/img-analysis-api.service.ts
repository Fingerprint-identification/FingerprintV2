import { Injectable } from '@angular/core';

const convertImg_API = "https://5818-197-54-114-107.ngrok.io/";

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
    return fetch(convertImg_API + "convertImageToMatrix", requestOptions);
  }

}
