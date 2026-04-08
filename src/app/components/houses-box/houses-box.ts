import { Component, inject, OnInit, signal } from '@angular/core';
import { HpHouse } from '../../models/hp-house';
import { WizardDataService } from '../../services/wizard-data.service';

@Component({
  selector: 'app-houses-box',
  imports: [],
  templateUrl: './houses-box.html',
  styleUrl: './houses-box.css'
})
export class HousesBoxComponent implements OnInit {
  private apiTool = inject(WizardDataService);
  listyHomes = signal<HpHouse[]>([]);

  ngOnInit(): void {
    this.apiTool.getAllHomes().subscribe((rows) => {
      this.listyHomes.set(rows);
    });
  }
}
