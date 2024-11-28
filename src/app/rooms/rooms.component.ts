import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  //interpolation data binding syntax
  hotelName = "taj hotel"

  //property Binding
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRoom: 10,
    bookedRoom: 5,
  }

  roomList: RoomList[] = []


  //Event bindng
  Toogle() {
    this.hideRooms = !this.hideRooms
  }


  constructor() { }
  //jab bhi api se data aaega usko hum ngonit me dalenge aur onit humara ek lifecycle hook hai jo constructor ke initialise hote hi chl jaaega
  ngOnInit(): void {
    this.roomList = [{
      roomType: "luxury",
      feature: "Air Conditioner",
      photos: "not available",
      price: 1200,
      checkIn: new Date('11-11-2024'),
      checkOut: new Date('11-11-2024'),
    },
    {
      roomType: "luxury",
      feature: "Air Conditioner",
      photos: "not available",
      price: 2200,
      checkIn: new Date('11-11-2024'),
      checkOut: new Date('25-11-2024'),
    },
    {
      roomType: "luxury",
      feature: "Air Conditioner",
      photos: "not available",
      price: 3200,
      checkIn: new Date('11-Nov-2024'),
      checkOut: new Date('25-Nov-2024'),
    }
    ]
  }


}
