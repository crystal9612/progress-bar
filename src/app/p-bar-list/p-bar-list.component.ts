import { Component, OnInit } from '@angular/core';
import { BarService } from '../bar.service';
import { Payload } from '../models/http';

@Component({
  selector: 'app-p-bar-list',
  templateUrl: './p-bar-list.component.html',
  styleUrls: ['./p-bar-list.component.scss'],
})
export class PBarListComponent implements OnInit {
  selectedBar = 0;
  payload: Payload = {
    buttons: [],
    bars: [],
    limit: 0,
  };
  constructor(private barService: BarService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.barService.getAll().subscribe((p) => {
      this.payload = p;
    });
  }
  changeProgress(amount: number) {
    this.setBars(this.selectedBar, amount);
  }

  setBars(idx: number, amount: number): void {
    let res = this.payload.bars[idx] + amount;
    if (res < 0) return;
    this.payload.bars[idx] = res;
  }

  trackByBars(index: number, bar: number): number {
    return index;
  }
}
