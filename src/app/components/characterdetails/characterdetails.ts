import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WizardDataService } from '../../services/wizard-data.service';
import { HpCharacter } from '../../models/hp-character';

@Component({
  selector: 'app-characterdetails',
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class CharacterdetailsComponent implements OnInit {
  private wayBag = inject(ActivatedRoute);
  private apiBag = inject(WizardDataService);

  oneChar = signal<HpCharacter | null>(null);
  stillLoad = signal(true);

  ngOnInit(): void {
    const gotId = this.wayBag.snapshot.paramMap.get('id');

    if (!gotId) {
      this.stillLoad.set(false);
      return;
    }

    this.apiBag.getCharById(gotId).subscribe((rows) => {
      this.oneChar.set(rows[0] ?? null);
      this.stillLoad.set(false);
    });
  }
}
