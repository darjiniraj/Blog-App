import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../model/blog-post';
import { TruncatePipe } from '../pipe/truncate.pipe';

@Component({
  selector: 'app-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.scss']
})
export class BlogPostTitleComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: String;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, [50]);
  }

  showFullSummary() {
      this.post.summary = this.fullSummary;
  }

}
