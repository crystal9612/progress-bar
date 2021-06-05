import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-p-bar',
  templateUrl: './p-bar.component.html',
  styleUrls: ['./p-bar.component.scss'],
})
export class PBarComponent implements OnInit, OnDestroy {
  @Input() value = 0;
  @Input() showValue: boolean = true;
  @Input() limit: number = 100;
  @Input() bgColor: string = 'primary';
  @Input() textColor: string = 'black';

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  get widthPercent() {
    const percent = (this.value * 100) / this.limit;
    console.log(percent);
    return percent > 100 ? 100 : percent;
  }

  get percent() {
    return Math.round((this.value * 100) / this.limit);
  }
}
