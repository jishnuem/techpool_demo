import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css']
})
export class MasterpageComponent implements OnInit {

  showFiller = false;
  opened=true;
  constructor() { }

  ngOnInit(): void {
  }

}
