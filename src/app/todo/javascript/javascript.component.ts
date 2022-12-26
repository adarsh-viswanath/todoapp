import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';
import { FeedbackService } from 'src/app/services/feedback.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService, FeedbackService]
})
export class JavascriptComponent {
  title = "Javascript"
  constructor(private enrollService:EnrollService, private feedbackService:FeedbackService) {}
  handleEnroll() { 
    this.enrollService.onEnrollClicked(this.title);   
  }
  handleFeedback() {
    this.feedbackService.onFeedbackClicked(this.title);
  }
}
