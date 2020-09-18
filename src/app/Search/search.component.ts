import { Component } from '@angular/core';
import { SearchService } from '../../app/Services/search.service';
import { Subject } from 'rxjs';
import { GithubRepo } from 'src/models/githubRepo.dto';

@Component({
  selector: 'search-card',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  shortcuts = [
    {
      icon: 'message',
      text: 'Messages',
      color: '#F9EFFA',
    },
    {
      icon: 'attachment',
      text: 'Attachments',
      color: '#E6F6F2',
    },
    {
      icon: 'people',
      text: 'People',
      color: '#F4F3FD',
    },
  ];

  searchTerm = new Subject<string>();
  recentSearchItems = [];
  githubRepos: GithubRepo[] = [];

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm).subscribe((results) => {
      this.githubRepos = results;
    });
  }

  _setRecentSearchItem(term: string) {
    const length: number = this.recentSearchItems.length;
    if (length === 3) {
      this.recentSearchItems.pop();
      this._pushItemToArray(term);
    } else {
      this._pushItemToArray(term);
    }
  }

  _pushItemToArray(term: string) {
    this.recentSearchItems.splice(0, 0, { text: term });
  }

  handleOnSearch(ev: KeyboardEvent) {
    let target = ev.target as HTMLInputElement;
    this.searchTerm.next(target.value);
  }

  handleOnClick(index: number) {
    this.recentSearchItems.splice(index, 1);
  }

  handleOnClickSearch(item: string) {
    this.githubRepos = [];
    this._setRecentSearchItem(item);
  }
}
