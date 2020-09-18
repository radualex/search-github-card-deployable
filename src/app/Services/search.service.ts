import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  map,
  catchError
} from "rxjs/operators";

import { GithubRepo } from "../../models/githubRepo.dto";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  baseUrl: string = "https://api.github.com/search/repositories?q=";

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>): Observable<GithubRepo[]> {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchEntries(term))
    );
  }

  searchEntries(term: string): Observable<GithubRepo[]> {
    if (term === "") {
      return this._emptyObersable();
    }
    return this.http
      .get<GithubRepo[]>(`${this.baseUrl}${term}&per_page=10`)
      .pipe(
        map((res: any) => {
          return res.items.map((item: any) => {
            return new GithubRepo(item.name, item.owner.login);
          });
        }),
        catchError(() => {
          return this._emptyObersable();
        })
      );
  }

  _emptyObersable(): Observable<GithubRepo[]> {
    return of<GithubRepo[]>([]);
  }
}
