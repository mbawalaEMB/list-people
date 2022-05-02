import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private API_URL = 'http://localhost:5000/persons';

  constructor(private http: HttpClient) {}

  // get persons list from server
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.API_URL);
  }

  // delete person from database
  deletePerson(person: Person): Observable<Person> {
    const url = `${this.API_URL}/${person.id}`;
    return this.http.delete<Person>(url);
  }

  // add person to database
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.API_URL, person, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
