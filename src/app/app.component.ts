import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	//title = 'i18n-presentation';
	selectedLanguage: string = "en";

	constructor(public translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.use('en');
	}
}
