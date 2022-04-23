import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetPopularTagsInterface } from '../interfaces/getPopularTags.interface';
import { PopularTagType } from '../interfaces/popularTag.type';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {
  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<GetPopularTagsInterface>(url).pipe(
      map((response: GetPopularTagsInterface) => {
        return response.tags
      })
    )
  }
}
