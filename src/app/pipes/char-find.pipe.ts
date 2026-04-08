import { Pipe, PipeTransform } from '@angular/core';
import { HpCharacter } from '../models/hp-character';

@Pipe({
  name: 'charFind'
})
export class CharFindPipe implements PipeTransform {
  transform(rows: HpCharacter[], txtValue: string, houseValue: string | null): HpCharacter[] {
    if (!rows || rows.length === 0) {
      return [];
    }

    const cleanTxt = (txtValue || '').trim().toLowerCase();
    const cleanHouse = (houseValue || 'all').toLowerCase();

    return rows.filter((item) => {
      const byTxt =
        cleanTxt.length === 0 ||
        item.name.toLowerCase().includes(cleanTxt) ||
        item.actor.toLowerCase().includes(cleanTxt);

      const byHouse = cleanHouse === 'all' || item.house.toLowerCase() === cleanHouse;

      return byTxt && byHouse;
    });
  }
}
