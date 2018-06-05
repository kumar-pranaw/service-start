import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';
import { LogginService } from 'src/app/logging.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  account: {name: string, status: string}[] = [];

  constructor(private accountservice: AccountService) {}
  ngOnInit() {
    this.account = this.accountservice.account;
  }
}
