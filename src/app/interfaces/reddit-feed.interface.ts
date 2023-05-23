export interface RedditFeedResponse {
  data: {
    after: string | null,
    before: string | null,
    children: RedditFeedEntry[],
  },
  kind: string
}

export interface RedditFeedEntry {
  data: {
    thumbnail: string,
    created: number,
    num_comments: number,
    author: string,
    score: number,
    title: string,
    selftext: string
  },
  kind: string,
}

export interface EntryData {
  thumbnail: string,
  created: number,
  num_comments: number,
  author: string,
  score: number,
  title: string,
  selftext: string
}
