import {RedditFeedResponse} from "../../app/interfaces/reddit-feed.interface";

export let mockResponse: RedditFeedResponse = {
  "kind": "Listing",
  "data": {
    "after": "t3_12odwo5",
    "children": [
      {
        "kind": "t3",
        "data": {
          "selftext": "En påminnelse bara ;).",
          "title": "SISTA ANMÄLNINGSDAGEN TILL HÖGSKOLAN/UNIVERSITET",
          "score": 175,
          "thumbnail": "self",
          "created": 1681726005,
          "num_comments": 22,
          "author": "John Doe"
        }
      }
    ],
    "before": null
  }
};
