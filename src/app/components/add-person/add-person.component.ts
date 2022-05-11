import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/Person';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  firstname!: string;
  lastname!: string;
  email!: string;
  showAddPerson!: boolean;

  // listen value from observable and use it to change showAddPerson.
  // then show or hide the add-person form
  subscription!: Subscription;

  @Output() onAddPerson: EventEmitter<Person> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddPerson = <boolean>value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstname || !this.lastname || !this.email) {
      alert('please add person info');
      return;
    }

    const person = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
    };

    // sending/emitting this event to the parent <app-persons>
    this.onAddPerson.emit(person);

    this.firstname = '';
    this.lastname = '';
    this.email = '';
  }
}
