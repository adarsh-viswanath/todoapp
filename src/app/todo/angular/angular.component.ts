import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';
import { FeedbackService } from 'src/app/services/feedback.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [EnrollService, FeedbackService]
})
export class AngularComponent {
  title = "Angular"

  constructor(private enrollService:EnrollService, private feedbackService:FeedbackService) {}
    handleEnroll(){
      this.enrollService.onEnrollClicked(this.title);
  }
  handleFeedback() {
    this.feedbackService.onFeedbackClicked(this.title);
  }

}

