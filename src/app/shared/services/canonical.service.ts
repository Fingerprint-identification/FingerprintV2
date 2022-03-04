import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

/**
 * Inject canonical services
 */
@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  /**
   *
   * @param dom
   */
  constructor(@Inject(DOCUMENT) private dom: Document) { }

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

}
