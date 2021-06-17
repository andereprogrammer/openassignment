import { Component } from '@angular/core';

@Component({
  selector: 'header-component-open',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Headercomponent';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  ChangeColor(val){


    let textchange = document.getElementById(val) as HTMLElement;
    textchange.style.color = "#663399";
    textchange.style.fontWeight = "600"

    if(val ==="loginbutton"){
    let buttonlogin = document.getElementById(val) as HTMLElement;
    buttonlogin.style.backgroundColor = "#663399"
    buttonlogin.style.color = "#fff";
    }
    else if(val==="getstarted"){
    let buttonlogin = document.getElementById(val) as HTMLElement;
    buttonlogin.style.background = "#663399"
    buttonlogin.style.color = "#fff";
    }



  }
  Reset(val){

    let textchange = document.getElementById(val) as HTMLElement;
    textchange.style.color = "#222222";
    textchange.style.fontWeight = "500"

    if(val="loginbutton"){
    let buttonlogin = document.getElementById(val) as HTMLElement;
    buttonlogin.style.backgroundColor= "transparent"
    buttonlogin.style.color="#663399"
    }

    let buttonlogin = document.getElementById('getstarted') as HTMLElement;
    buttonlogin.style.background="none"
    buttonlogin.style.backgroundImage = "linear-gradient( 90deg, #9F62C9, #663399)";
    buttonlogin.style.color="#fff"

  }
}
