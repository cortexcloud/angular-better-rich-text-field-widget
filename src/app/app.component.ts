import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import Editor from '@cortexcloud/ckeditor5-classic-underline';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {

  public CKEditor = Editor;
  public editorData = '';

  @Input()
  inputData: unknown;

  @Input()
  config?: any;

  @Input()
  descriptor = {
    valueModel: {
      type: 'string',
      metadata: { title: 'rich text' }
    },
    configuration: {}
  }

  @Output()
  outputData: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputData']?.currentValue) {
      try {
        this.editorData = changes['inputData'].currentValue;
      } catch (e) {
        console.error('error: ', e);
        console.error('change value: ', changes['inputData']?.currentValue);
      }
    }
  }

  public onEditorDataChange(_event : ChangeEvent<any>) {
    this.outputData.emit(this.editorData);
  }
}
