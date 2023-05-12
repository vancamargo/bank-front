import { Component, Input, OnInit } from '@angular/core';

export declare type MatSizeButton = 'sm' | 'md' | 'lg' | 'full';
@Component({
  selector: 'button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() size: MatSizeButton = 'sm';
  constructor() {}

  ngOnInit() {}
}
