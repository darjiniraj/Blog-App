import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostTitleComponent } from './blog-post-title/blog-post-title.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './service/blog-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTitleComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
