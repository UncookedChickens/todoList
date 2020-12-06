import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';

import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //public number: Array<any>;

  constructor(private storage: Storage, private tasksService: TasksService) {
    //let list: number[] = [1, 2, 3];
    // this.number = [
    //   {name: "1"},
    //   {name: "2"}
    // ];
    // storage.set('taskName','taskValue');
    
  }

  ngOnInit() {
    // this.photoService.loadSaved();
    this.tasksService.getTasks();
  }

}
