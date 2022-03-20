import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-searched-info',
  templateUrl: './user-searched-info.component.html',
  styleUrls: ['./user-searched-info.component.scss', '../../global-style/admin-global-style.scss']
})
export class UserSearchedInfoComponent implements OnInit {

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
