import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'List of People';
  showAddPerson!: boolean;
  // listen value from observable and use it to change showAddPerson.
  // and after change the button color and text
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddPerson = value;
    });
  }

  ngOnInit(): void {}

  toggleAddPerson() {
    this.uiService.toggleAddPerson();
  }
}
