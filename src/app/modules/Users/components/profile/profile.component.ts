import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

/**
 * Profile component
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  /**
   * Local reference to store current user
   */
  CurrentUser !: any;

  /**
   * @param Token token that access token services to get user
   */
  constructor(private Token: TokenStorageService) { }

  /**
  * ngOnInit
  */
  ngOnInit(): void {
    this.CurrentUser = this.Token.GetUser();
  }

}
