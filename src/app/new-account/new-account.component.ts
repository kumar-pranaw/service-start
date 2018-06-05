import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  })
export class NewAccountComponent {

  constructor(private loggingService: LogginService, private accountservice: AccountService) {
    this.accountservice.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
  this.accountservice.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatusChange(status);
  }
}
