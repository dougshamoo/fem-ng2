import {Component} from 'angular2/core';
import {Widget} from './widget.model.ts';

@Component({
  selector: 'widgets',
  templateUrl: 'app/widgets/widgets.component.html'
})
export class WidgetsComponent {
  title: string = 'Widgets';
  body: string = 'This is the Widgets body';
  widgets: Widget[] = [];
}