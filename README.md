- created following components: 
  * header
  * persons 
  * button 
  * add-person

- button component has properties color, text which will change the button color and text inside a button 
* text and color are passed from Parent (app-header) component of button. Hence I used the @Input decorator. 
* when button is clicked, btnClick event is emitted(passed to parent component <app-header>). The parent component
will implement appropriate actions to be taken once button is clicked. Used @Output decorator in button
component model for this.

- created Person interface

- for each input field, I created a two way data binding using ngModel which is in FormsModule.
* With this binding, changes in the component model will be reflected on the view (template) and vice-versa.
* therefore I added the FormsModule to the app module.

Delete Person: - I pass the click event to the parent (app-persons) using event emitter. pass the corresponding person in the event emitter. - Once the parent receives the person, it will fire up a function that updates the list by deleting corresponding person.
  
- Communication with the server is done by HttpClient from the HTTP API (@angular/common/http)
  
- Created following services, :
* PersonService: which will handle communications with server 
* UiService: helps changing the view according to the toggle button.
  
Added mock server using "npm i json-server".
* db.json will act as the database 
* persons property in db.json will act as table to database 
* to run the mock server use the following command "npm run server" 
* refer to the server property in scripts array of package.json file
if you need to change port number from port 5000.

NOTE:
_ run the angular app with "ng serve --open"
_ then run the mock server with "npm run server"
