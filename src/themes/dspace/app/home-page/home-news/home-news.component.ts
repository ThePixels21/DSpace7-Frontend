import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';

@Component({
  selector: 'ds-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html'
})
export class HomeNewsComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('backgroundVideo') backgroundVideo: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    super();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('mousemove', this.playVideo.bind(this));
      window.addEventListener('touchstart', this.playVideo.bind(this));
    }
  }

  playVideo(): void {
    const video = this.backgroundVideo.nativeElement;
    video.play().catch(error => {
      console.error('Error attempting to play', error);
    });

    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('mousemove', this.playVideo.bind(this));
      window.removeEventListener('touchstart', this.playVideo.bind(this));
    }
  }
}
