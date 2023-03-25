import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent {
  showSecret = false;
  logs = [];
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.logs.push(new Date());
  }
}
