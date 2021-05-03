export class Promotions {

	id: string;
	title: string;
	highlightTitle: string;
	highlightText: string;
	highlightButtonText: string;
	highlightButtonLink: string;
	highlightImage: string;
	stepsTitle: string;
	steps: string;
	calendarTitle: string;
	calendarPeriod: string;
	calendarDate: string;
	faqTitle: string;
	faq: string;
	disclaimerText: string;
	
	constructor(id:string, title:string, highlightTitle:string, highlightText:string, highlightButtonText:string, highlightButtonLink:string, highlightImage:string, stepsTitle:string, steps:string, calendarTitle:string, calendarPeriod:string, calendarDate:string, faqTitle:string, faq:string, disclaimerText:string) {
		this.id = id;
		this.title = title;
		this.highlightTitle = highlightTitle;
		this.highlightText = highlightText;
		this.highlightButtonText = highlightButtonText;
		this.highlightButtonLink = highlightButtonLink;
		this.highlightImage = highlightImage;
		this.stepsTitle = stepsTitle;
		this.steps = steps;
		this.calendarTitle = calendarTitle;
		this.calendarPeriod = calendarPeriod;
		this.calendarDate = calendarDate;
		this.faqTitle = faqTitle;
		this.faq = faq;
		this.disclaimerText = disclaimerText;
	}

}
