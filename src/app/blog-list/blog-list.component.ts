import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../model/blog-post';

import { BlogPostTitleComponent } from '../blog-post-title/blog-post-title.component';
import { BlogDataService } from '../service/blog-data.service';
import { TruncatePipe } from '../pipe/truncate.pipe';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage: number;
  isExpand = false;

  @ViewChildren('tile') blogTileComponetList: QueryList<BlogPostTitleComponent>;
  constructor(private blogDataService: BlogDataService, private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getBlogData();
  }

  updatePage(newPage) {
    console.log('Event emmited and method executed');
    this.currentPage = newPage;
  }

  expandAll() {
    this.isExpand = true;
    this.blogTileComponetList.forEach(element => {
      element.showFullSummary();
    });
  }

  collapseAll() {
    this.isExpand = false;
    this.blogTileComponetList.forEach(element => {
      console.log(element);
      element.post.summary = this.truncatePipe.transform(element.post.summary, [50]);
    });

  }

}
