import { Component, OnInit } from '@angular/core';
import { Offering, CreateOffering } from '../models/card.model';
import { OfferingService } from '../services/offering.service';
import { NasaIOD } from '../models/nasa.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public ImageOfTheDay: NasaIOD;
  public Cards: Offering[];

  constructor(private offeringService: OfferingService,
              private apiService: ApiService) { }

  async ngOnInit() {
    await this.offeringService.GetOfferings().subscribe(cards => {
      this.Cards = cards;
    });
    await this.apiService.GetNasaImageOfTheDay().subscribe(img => {
      this.ImageOfTheDay = img;
      console.log(img);
    });
  }
}
