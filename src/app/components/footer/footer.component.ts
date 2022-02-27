import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
* Footer component
*/
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
  * Constructor
  * @param router
  */
  constructor(
    private router:Router
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
  }
  /**
   * Login method that navigate to Login page
   */
  ToLogin(): void{
    this.router.navigate(['/Login'])
  }

}
