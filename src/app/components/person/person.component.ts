import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person!: Person;
  @Output() onDeletePerson: EventEmitter<Person> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(person: Person) {
    // transfer the click event to parent (<app-persons></app-persons>)
    this.onDeletePerson.emit(person);
  }
}
