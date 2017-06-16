import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Testserver',serverContent:'just a test'}];

  onServerAdded(serverData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      serverContent: serverData.serverContent
    });
  }

  onBluePrintAdded(blueprintData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      serverContent: blueprintData.serverContent
    });
  }



}
