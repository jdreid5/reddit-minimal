# RedditMinimal README

## Aim

The aim of this project was to build a simple, minimal web app that received posts and comments from Reddit's JSON API and presented them in a simplified user interface emulating the Reddit homepage. 

## Technologies and Software used

* HTML
* CSS
* JavaScript
* React
* Redux
* Git and Github
* Command line and file navigation

## Features

* Search function that allows the current rendered posts to be filtered based on the search term. Clicking the 'x' re-renders the posts from r/all.
* Initially, displayed posts are retrieved from the r/all feed. Clicking the icon in the top left refreshes this feed. 
* A list of the most popular subreddits are displayed on the right. Clicking on these will fetch the top 25 posts from this subreddit.
* The top 20 comments from each post can be displayed in a container by clicking the comments button at the bottom right of each post. 
* The total votes retrieved from Reddit are displayed in the top left of each post. The JSON API is limited to no write operations so clicking the arrows next to this emulates upvote/downvote functionality.

## Future Work

In the future I'd like to add tests using Jest and React Testing Library, as well as upvote/downvote functionality on individual comments.

## Launch

To access this app 
