import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HpCharacter } from '../models/hp-character';
import { HpHouse } from '../models/hp-house';

@Injectable({
  providedIn: 'root'
})
export class WizardDataService {
  private httpOne = inject(HttpClient);
  private hostBase = 'https://hp-api.onrender.com/api';

  getAllChars(): Observable<HpCharacter[]> {
    return this.httpOne.get<HpCharacter[]>(`${this.hostBase}/characters`);
  }

  getAllHomes(): Observable<HpHouse[]> {
    return this.httpOne.get<HpHouse[]>(`${this.hostBase}/houses`);
  }
}
