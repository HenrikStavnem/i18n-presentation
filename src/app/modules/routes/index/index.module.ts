import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		IndexRoutingModule,
		TranslateModule
	],
	exports: [
		TranslateModule
	]
})
export class IndexModule { }