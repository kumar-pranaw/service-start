import { LogginService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AccountService {


constructor(private loggingServices: LogginService) {}

    account = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      addAccount(name: string, status: string) {
        this.account.push({name: name, status: status});
        this.loggingServices.logStatusChange(status);
      }
      updateStatus(id: number, status: string) {
this.account[id].status = status;
this.loggingServices.logStatusChange(status);
      }
}
