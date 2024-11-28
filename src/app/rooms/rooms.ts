export interface Room {
    totalRooms : number;
    availableRoom:number;
    bookedRoom:number;
}
export interface RoomList{
    roomType:string;
    feature:string;
    photos:string;
    // available:boolean;
    price:number;
    checkIn:Date;
    checkOut:Date;
}