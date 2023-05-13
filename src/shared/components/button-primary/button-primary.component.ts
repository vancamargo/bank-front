import { Component, Input, OnInit } from '@angular/core';

export declare type MatSizeButton = 'sm' | 'md' | 'lg' | 'full';
declare type MatColorTheme = 'primary' | 'accent' | 'warn';
@Component({
  selector: 'button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() color: MatColorTheme = 'primary';
  @Input() size: MatSizeButton = 'sm';
  @Input() isDisabled = false;
  constructor() {}

  ngOnInit() {}
}
