import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})



export class AppComponent {
  title = 'angular-basics-exercise';
}

export class NameComponent {
  name = 'Mary Linda';
  }

