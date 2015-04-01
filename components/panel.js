import {Component, Template} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'panel'
})

@Template({
  url: System.baseURL + 'components/panel.html'
})

// Component controller
export class Panel {
  constructor() {
    // this stuff
    this.foo = 'bar';
  }

  click() {
    //stuff
  }

}