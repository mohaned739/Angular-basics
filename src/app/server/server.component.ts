import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent{
    ServerId: number = 10;
    ServerStatus: string = 'offline';

    constructor() {
        this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    public getServerStatus(){
        return this.ServerStatus;
    }

    public getColor(){
        if(this.ServerStatus === 'offline'){
            return 'red';
        }
        return 'green';
    }
}