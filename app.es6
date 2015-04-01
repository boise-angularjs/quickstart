import {Component, Template, bootstrap} from 'angular2/angular2';
import {Panel} from 'components/panel';

// Annotation section
@Component({
  selector: 'my-app'
})

@Template({
  url: System.baseURL + 'components/my-app.html',
  directives: [
    Panel
  ]
})

// Component controller
class MyApp {
  constructor() {
    this.name = 'Angular 2';
  }
}

bootstrap(MyApp);