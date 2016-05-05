import { describe, it, expect } from 'angular2/testing';

import { WidgetsComponent } from './widgets.component';

describe('WidgetsComponent', () => {
  it('should be a function', () => {
    expect(typeof WidgetsComponent).toBe('function');
  });
  it('shoud have a title property', () => {
    expect(WidgetsComponent.prototype.title);
  });
});
