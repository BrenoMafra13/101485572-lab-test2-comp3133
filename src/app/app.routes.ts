import { Routes } from '@angular/router';
import { CharsBoxComponent } from './components/chars-box/chars-box';
import { HousesBoxComponent } from './components/houses-box/houses-box';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'characters',
		pathMatch: 'full'
	},
	{
		path: 'characters',
		component: CharsBoxComponent
	},
	{
		path: 'houses',
		component: HousesBoxComponent
	}
];
