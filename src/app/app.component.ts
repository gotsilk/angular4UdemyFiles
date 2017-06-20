import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Testserver',content:'just a test'}];

  onServerAdded(serverData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(blueprintData: {serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'i change you';
  }

  onDestroy(){
    if(this.serverElements.length > 1) {
      this.serverElements.splice(this.serverElements.length - 1);
    }else{
      this.serverElements.splice(0);
    }
  }


}
