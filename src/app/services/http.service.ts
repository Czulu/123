import {Injectable} from '@angular/core';
import {RedditFeedResponse} from "../interfaces/reddit-feed.interface";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private static baseUrl = 'https://www.reddit.com/r/sweden.json';

  async fetchEntries(numberOfEntries: number, direction: string | null = null): Promise<RedditFeedResponse> {
    const url: string = direction ? `${HttpService.baseUrl}?limit=${numberOfEntries}&after=${direction}` :
      `${HttpService.baseUrl}?limit=${numberOfEntries}` ;
    try {
      const res = await fetch(url);
      return await res.json();
    } catch(err) {
      throw err;
    }
  }
}
