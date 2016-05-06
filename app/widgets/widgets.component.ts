import {Component} from 'angular2/core';
import {Widget} from './widget.model.ts';

@Component({
  selector: 'widgets',
  templateUrl: 'app/widgets/widgets.component.html',
  styles: [`
    button {
      background-color: blue;
      border: none;
      border-radius: 5%;
      outline: none;
      padding: 10px;
      min-width: 80px;
      height: 50px;
      color: white;
      transition: transform .3s ease-in;
    }

    button[disabled] {
      background-color: gray;
      cursor: not-allowed;
    }

    .scroll {
      height: 30px;
      width: 300px;
      overflow-y: scroll;
    }
  `]
})
export class WidgetsComponent {
  title: string = 'Widgets';
  body: string = 'This is the Widgets body';
  widgets: Widget[] = [];
  interpolated: string = 'Click Me';
  nums: number[] = [1, 2, 3];
  person = {
    name: 'Doug',
    age: 29
  };
  isDisabled: boolean = false;
  xpos: string = 'translateX(0px)';
  count: number = 0;
  inputVal: string = 'Enter text...';
  show: boolean = true;
  constructor() {
    setInterval( () => {
      this.transform();
    }, 500);
  };

  transform() {
    this.count += 5;
    this.xpos = `translateX(${this.count}px)`;
  }

  onClick (event:Event) {
    console.log(`${event.type} event activated!`);
    this.isDisabled = !this.isDisabled;
  }

  onScroll () {
    console.log('scrolling...')
  }

  toggleShow() {
    this.show = !this.show;
  }
}
