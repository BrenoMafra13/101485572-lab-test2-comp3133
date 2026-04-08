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
  private charsBase = 'https://hp-api.onrender.com/api';
  private homesBase = 'https://wizard-world-api.herokuapp.com';

  getAllChars(): Observable<HpCharacter[]> {
    return this.httpOne.get<HpCharacter[]>(`${this.charsBase}/characters`);
  }

  getCharsByHouse(oneHouse: string): Observable<HpCharacter[]> {
    return this.httpOne.get<HpCharacter[]>(`${this.charsBase}/characters/house/${oneHouse}`);
  }

  getCharById(oneId: string): Observable<HpCharacter[]> {
    return this.httpOne.get<HpCharacter[]>(`${this.charsBase}/character/${oneId}`);
  }

  getAllHomes(): Observable<HpHouse[]> {
    return this.httpOne.get<HpHouse[]>(`${this.homesBase}/Houses`);
  }
}
