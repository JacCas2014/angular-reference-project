import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

/*
 The @Component() decorator indicates that the following class is a component.@Component() also provides metadata about the component, including its selector, templates, and styles.
 The selector, app-product-alerts, identifies the component. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
 The template and style filenames reference the component's HTML and CSS.
 The @Component() definition also exports the class, ProductAlertsComponent, which handles functionality for the component.
 */
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  /*
  The @Input() decorator is a property of type Product.
  When add app-product-alerts to a parent html component bind a value to this property.
  Also valid: @Input() product! : Product
  */
  @Input() product : Product | undefined 

  /*
  Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit a notify event.
  */
  @Output() notify = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
