import { Injectable } from '@angular/core';

const Img_API = "https://a34f-197-54-96-47.ngrok.io/";

@Injectable({
  providedIn: 'root'
})
export class ImgAnalysisApiService {

  constructor() { }
  /**
     * This function send request to server and wait for the matrix returned
     * from server
     * @param ImgFormData this image of the user data
     * @returns jPromise
     */
  sendImgToConvert(ImgFormData: any): Promise<any> {
    const requestOptions = {
      method: 'POST',
      body: ImgFormData,
    };
    return fetch(Img_API + "convertImageToMatrix", requestOptions);
  }
  /**
     * This function send request to server and wait for the id returned
     * from server
     * @param ImgFormData this image of the user data
     * @returns Promise
     */
  sendImgToCompare(ImgFormData: any): Promise<any> {
    const requestOptions = {
      method: 'POST',
      body: ImgFormData,
    };
    return fetch(Img_API + "compareBetweenTwoMatrices", requestOptions);
  }
}
