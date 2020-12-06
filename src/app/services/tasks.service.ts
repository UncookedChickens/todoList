import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    // this service will take care of the set/get key/value pairs, then converting them to the array
    //public task: Tasks[] = [];
    public tasks: Array<any>;
    
    constructor(private storage: Storage) { }

    getTasks() {
        // this.storage.get('tasks').then((task) => {
        //     this.task = task || [];
        // });
        this.tasks = [
            { name: "get the home page to communicate with TasksService", group: "Main Features"},
            { name: "add functionality to add tasks", group: "Main Features" }
        ];
        // this.storage.get('photos').then((photos) => {
        //     this.photos = photos || [];
        // });
    }

    addTask() {
        this.tasks.push();
    }

}