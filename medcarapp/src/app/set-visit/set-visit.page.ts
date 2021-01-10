import { Component, OnInit } from '@angular/core';

import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-set-visit',
  templateUrl: './set-visit.page.html',
  styleUrls: ['./set-visit.page.scss'],
})
export class SetVisitPage implements OnInit {

  constructor( private fileChooser: FileChooser ) { }

  ngOnInit() {
  }

  chooseFile() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e))
  }

  addFile() {

  }

}
