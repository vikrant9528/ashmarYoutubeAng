import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
@Input() rooms: RoomList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
