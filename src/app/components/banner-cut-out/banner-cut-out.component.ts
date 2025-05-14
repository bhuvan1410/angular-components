import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss']
})
export class BannerCutOutComponent {
  @Input() public imageUrl = 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg';
  @Input() public title = 'Banner Cut Out Example';
}