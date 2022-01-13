import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  @Input()
  inputData: unknown;

  @Input()
  config?: any;

  @Input()
  descriptor = {
    valueModel: {
      type: 'number',
      metadata: {title: 'number value'}
    },
    configuration: {
      hideButton: {type: 'boolean', defaultValue: false}
    }
  }

  @Output()
  outputData: EventEmitter<any> = new EventEmitter<any>();

  value: number | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputData']?.currentValue) {
      try {
        this.value = parseInt(changes['inputData'].currentValue, 10);
      } catch (e) {
        console.error('Input data is not a number!', changes['inputData']?.currentValue);
      }
    }
  }

  resetInputData() {
    this.value = 500;
    this.outputData.emit(this.value);
  }

  updateInputData(inputEvent: Event) {
    this.value = (inputEvent.target as any)?.value;
    this.outputData.emit(this.value);
  }
}
