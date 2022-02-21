import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../../../core/models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-auth-card',
  templateUrl: 'auth-card.component.html',
  styleUrls: [
    './auth-card.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class AuthCardComponent implements OnInit {
  ngOnInit() {}
  @Input('ClassName') ClassName = '';
  @Input('ImgUrl') ImgUrl = '';
}
