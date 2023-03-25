import { Component } from "@angular/core";

@Component({
    selector: 'binding-assignment',
    templateUrl: 'binding-assignment.component.html'
})
export class BindingAssignmentComponent{
    Username = '';

    onReset(){
        this.Username = '';
    }
}