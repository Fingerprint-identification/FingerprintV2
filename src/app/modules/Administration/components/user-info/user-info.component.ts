import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss','../../global-style/admin-global-style.scss']
})
export class UserInfoComponent implements OnInit {
  diseases : string[] = ["animia", "Diabetes"];
  diseasesSubject$ = new BehaviorSubject<string[]>(null!);

  constructor() { }

  ngOnInit(): void {
    this.diseasesSubject$.next([...this.diseases]);

  }
  AddDiseases(){
    this.diseases.push("hatem");
    this.diseasesSubject$.next([...this.diseases]);
  }

}
