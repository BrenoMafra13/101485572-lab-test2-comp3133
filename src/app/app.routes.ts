import { Routes } from '@angular/router';
import { CharacterlistComponent } from './components/characterlist/characterlist';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'characterlist',
		pathMatch: 'full'
	},
	{
		path: 'characterlist',
		component: CharacterlistComponent
	},
	{
		path: 'characterdetails/:id',
		component: CharacterdetailsComponent
	}
];
