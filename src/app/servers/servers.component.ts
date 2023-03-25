import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus= 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    //setTimeOut Method is used to call a method after specific time
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }
}
