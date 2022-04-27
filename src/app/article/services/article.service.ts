import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
;
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GetArticleResponseInterface } from '../interfaces/get-article-response.interface';
import { ArticleInterface } from 'src/app/globalFeed/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article
      })
    )
  }

  constructor(private http: HttpClient) { }
}
