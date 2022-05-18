import { Component, OnInit } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
	currentSlide: number = 1;
	totalSlides: number = 1;
	selectedLanguage: string = 'en';

	DIRECTION_PREVIOUS: number = -1;
	DIRECTION_NEXT: number = +1;

	constructor(public translate: TranslateService) {

	}

	ngOnInit(): void {
		this.totalSlides = document.querySelectorAll('.slide-item').length;
	}

	onNextClick() {
		this.moveSlide(this.DIRECTION_NEXT);
	}

	onPreviousClick() {
		this.moveSlide(this.DIRECTION_PREVIOUS);
	}

	moveSlide(direction: number) {
		let slideWrapper: HTMLElement | null = document.querySelector('.slide-wrapper'),
			body = document.body,
			slideItem = this.currentSlide,
			totalSlides = this.totalSlides,
			slideAmount = 0;
		
		if (direction === this.DIRECTION_NEXT) {
			if (slideItem !== totalSlides) {
				//body.dataset.slideItem = slideItem + 1;
				this.currentSlide += 1;
				slideItem = this.currentSlide;
			}
		}
	
		if (direction === this.DIRECTION_PREVIOUS) {
			if (slideItem !== 1) {
				//body.dataset.slideItem = slideItem - 1;
				this.currentSlide -= 1;
				slideItem = this.currentSlide;
			}
		}
		
		slideAmount = (slideItem - 1) * -100;
		if (slideWrapper) {
			slideWrapper.style.cssText = `transform: translateX(${slideAmount}%)`;
		}
	}

	onToggleLanguageClick() {
		if (this.selectedLanguage === 'en') {
			this.selectedLanguage = 'dk';
		}
		else {
			this.selectedLanguage = 'en';
		}

		this.translate.use(this.selectedLanguage);
	}

}