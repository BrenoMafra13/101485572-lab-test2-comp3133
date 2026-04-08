import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class CharacterfilterComponent implements OnInit {
  chosenHouse = output<string>();
  homePick = new FormControl('all', { nonNullable: true });
  homeOps = ['all', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  ngOnInit(): void {
    this.homePick.valueChanges.subscribe((val) => {
      this.chosenHouse.emit(val);
    });
  }
}
