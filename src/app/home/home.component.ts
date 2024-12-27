import { NgxParticlesComponent } from '@omnedia/ngx-particles';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { DatePipe } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxParticlesComponent, NgxAuroraComponent, CurrencyMaskModule],
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isBrowser: boolean;
  myDate: any = new Date();

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private datePipe: DatePipe
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.myDate = this.datePipe.transform(this.myDate, "dd '\de\' MMMM '\de\' yyyy '\às\' HH'\h'mm", 'pt-BR', 'pt-BR');
  }
}
