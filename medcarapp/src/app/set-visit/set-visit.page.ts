import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Chooser } from '@ionic-native/chooser/ngx';

@Component({
  selector: 'app-set-visit',
  templateUrl: './set-visit.page.html',
  styleUrls: ['./set-visit.page.scss'],
})
export class SetVisitPage implements OnInit {

  returnpath: string="";

  constructor(  private fileChooser: FileChooser,
                private router: Router,
                private filePath: FilePath,
                private chooser: Chooser
                ) { }

  ngOnInit() {

  }

  switchToCalendar() {
    this.router.navigate(['/calendar']);
  }

  pickFile() {
    this.fileChooser.open().then((fileuri)=>{
      this.filePath.resolveNativePath(fileuri).then(
        (resolvednativepath)=>{
          this.returnpath = resolvednativepath;
        })
    })
  }

  chooseFile() {
    this.chooser.getFile()
      .then(file => console.log(file ? file.name : 'canceled'))
      .catch((error: any) => console.error(error));
  }

  addFile() {

  }

}
