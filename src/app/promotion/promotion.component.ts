import { Component, OnInit } from '@angular/core';
import { Promotions } from '../promotions';
import { PromotionService } from '../promotion.service';


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(private _promotionService: PromotionService) { }
  public promotions: Promotions[];


  ngOnInit() {


  	this._promotionService.getPromotions()
  	 .subscribe(
  	 	retorno => {
  	 		this.promotions = retorno.map (item => 
  	 		{ 
  	 			return new Promotions(
  	 					item.id, 
						item.title, 
						item.highlightTitle, 
						item.highlightText, 
						item.highlightButtonText, 
						item.highlightButtonLink, 
						item.highlightImage, 
						item.stepsTitle, 
						item.steps, 
						item.calendarTitle, 
						item.calendarPeriod, 
						item.calendarDate, 
						item.faqTitle, 
						item.faq, 
						item.disclaimerText
  	 				)
  	 		}
  	 		)
 		}
 	)

  	

  }

}
