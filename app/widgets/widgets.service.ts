import {Injectable} from 'angular2/core';

@Injectable()
export class WidgetsService {
  widgets = [
    {title: 'Widget 1', price: 100},
    {title: 'Widget 2', price: 200},
    {title: 'Widget 3', price: 300},
    {title: 'Widget 4', price: 400}
  ]
}
