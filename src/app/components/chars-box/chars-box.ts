import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HpCharacter } from '../../models/hp-character';
import { WizardDataService } from '../../services/wizard-data.service';
import { CharFindPipe } from '../../pipes/char-find.pipe';

@Component({
  selector: 'app-chars-box',
  imports: [FormsModule, ReactiveFormsModule, CharFindPipe],
  templateUrl: './chars-box.html',
  styleUrl: './chars-box.css'
})
export class CharsBoxComponent implements OnInit {
  private apiTool = inject(WizardDataService);
  listyChars = signal<HpCharacter[]>([]);
  busyLoad = signal(true);
  textSeek = '';
  housePick = new FormControl('all', { nonNullable: true });
  houseOps = ['all', 'gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];

  ngOnInit(): void {
    this.apiTool.getAllChars().subscribe((rows) => {
      this.listyChars.set(rows.slice(0, 24));
      this.busyLoad.set(false);
    });
  }
}
