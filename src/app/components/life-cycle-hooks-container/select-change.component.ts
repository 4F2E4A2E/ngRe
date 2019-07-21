import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Hook$, selectChange} from '@ngx-re';

@Component({
  selector: 'app-select-change',
  template: `state$: {{state$ |async | json}}    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectChangeComponent implements OnChanges, AfterViewInit {

  public state = 0;
  @Hook$('onChanges')
  onChanges$;

  @Input()
  value: { value: number };
  state$ = this.onChanges$.pipe(selectChange('value'));

  constructor() {

  }

  // @TODO remove after fixed reactive hooks
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
  }

}
