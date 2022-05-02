import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddPerson: boolean = false;

  // listens to any changes on the showAddPerson and acts accordingly
  // observer and Observable at same time
  private subject = new Subject<any>();

  constructor() {}

  toggleAddPerson() {
    this.showAddPerson = !this.showAddPerson;
    // send messages to an observable which are then
    // sent to all angular components that are subscribers (a.k.a. observers) of this observable.
    this.subject.next(this.showAddPerson);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
