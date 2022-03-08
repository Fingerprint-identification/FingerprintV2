import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Device component
 */
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  /** */
   product_id: string;

  /**
   *
   * @param actRoute to extract id from navbar
   */
   constructor(private actRoute: ActivatedRoute) {
     this.product_id = this.actRoute.snapshot.params['id'];
     console.log(this.product_id)
   }

  /**
   * ngOnInit
   */
  ngOnInit(): void {

  }

}
