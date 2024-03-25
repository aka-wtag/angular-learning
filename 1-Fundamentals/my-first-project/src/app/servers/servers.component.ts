import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: '[app-servers]', // attribute
  // selector: '.app-servers', // class
  selector: 'app-servers',
  // template: `<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverStatus = 'No server added';
  items = [1, 2, 3, 4];

  servers = [
    {
      serverId: 1,
      serverStatus: 'offline',
    },
    {
      serverId: 2,
      serverStatus: 'online',
    },
  ];

  constructor() {
    // setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.allowNewServer = false;
    this.serverStatus = 'server added';
  }
}
