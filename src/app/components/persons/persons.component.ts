import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe((persons) => {
      this.persons = persons;
    });
  }

  // executed after receiving emitted click event (onDeletePerson) from <app-person></app-person>
  deletePerson(person: Person) {
    this.personService.deletePerson(person).subscribe(() => {
      this.persons = this.persons.filter((person_) => {
        // removing person from the template (view)
        return person_.id !== person.id;
      });
    });
  }

  // executed after receiving emitted click event (onAddPerson) from <app-add-person></app-add-person>
  addPerson(person: Person) {
    this.personService.addPerson(person).subscribe((person_) => {
      this.persons.push(person_);
    });
  }
}
