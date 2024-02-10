import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  title = 'portfolio-website';
   currentIndex:number = 0;
    showAboutME:boolean=false;
    openResume(){
      const resumeUrl = '../assets/Niket_shah_resume.pdf';
      window.open(resumeUrl, '_blank');
    }
    aboutME(){
      this.showAboutME=true;
    }
    showPortfolio(){
      this.showAboutME=false;
    }
    onBurgerMenu(){
      
    }
}
