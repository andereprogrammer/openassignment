import { Component } from '@angular/core';
import { MatSlider } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'homepage-component-open',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'HomepageComponent';
  loanamount = 100000;
  emiamount = 15000;
  gridsize: number;
  expense: number
  scroll: boolean = false;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true)
  }
  scrolling = (scroll) => {
    let scrollshow = scroll.target.scrollingElement.scrollTop;
    console.log();
    if (scrollshow >= 100) { this.scroll = true }
    else { this.scroll = false }
  }


  updateSetting(event) {
    this.gridsize = event.value;

  }
  expenseSetting(event) {
    this.expense = event.value
  }
  ChangeCardColor(val, txt, txt2) {
    console.log(txt, txt2)
    let cardcolor = document.getElementById(val) as HTMLElement;
    cardcolor.style.backgroundColor = "#9F62C9";
    let txtColor = document.getElementById(txt) as HTMLElement;
    txtColor.style.color = "#fff";
    console.log(txtColor)
    let txtColor2 = document.getElementById(txt2) as HTMLElement;
    txtColor2.style.color = "#FFF"
    console.log(txtColor2)




  }






  ResetColor(val) {
    let textcolor = document.getElementsByClassName('cardHeading') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < textcolor.length; i++) {
      textcolor[i].style.color = "#333333"
    }
    let textcolordet = document.getElementsByClassName('cardDetails') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < textcolordet.length; i++) {
      textcolordet[i].style.color = "#999999"
    }
    let cardcolor1 = document.getElementById(val) as HTMLElement;
    cardcolor1.style.backgroundColor = "#F9F9F9"


  }



}
