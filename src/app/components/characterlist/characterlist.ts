import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WizardDataService } from '../../services/wizard-data.service';
import { HpCharacter } from '../../models/hp-character';
import { HpHouse } from '../../models/hp-house';
import { CharacterfilterComponent } from '../characterfilter/characterfilter';

@Component({
  selector: 'app-characterlist',
  imports: [RouterLink, MatCardModule, MatButtonModule, CharacterfilterComponent],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class CharacterlistComponent implements OnInit {
  private apiBag = inject(WizardDataService);
  allPeeps = signal<HpCharacter[]>([]);
  showPeeps = signal<HpCharacter[]>([]);
  homeList = signal<HpHouse[]>([]);
  stillLoad = signal(true);
  homesLoad = signal(true);

  ngOnInit(): void {
    this.apiBag.getAllChars().subscribe((rows) => {
      this.allPeeps.set(rows);
      this.showPeeps.set(rows);
      this.stillLoad.set(false);
    });

    this.apiBag.getAllHomes().subscribe((rows) => {
      this.homeList.set(rows.slice(0, 4));
      this.homesLoad.set(false);
    });
  }

  onHousePick(oneHouse: string): void {
    if (oneHouse === 'all') {
      this.showPeeps.set(this.allPeeps());
      return;
    }

    this.stillLoad.set(true);
    this.apiBag.getCharsByHouse(oneHouse.toLowerCase()).subscribe((rows) => {
      this.showPeeps.set(rows);
      this.stillLoad.set(false);
    });
  }
}
