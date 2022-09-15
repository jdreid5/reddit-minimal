import React, { useEffect, useState } from "react";
import styles from './Post.module.css';
import { Comments } from "../comments/Comments";

export const Post = (props) => {
  const { post } = props;
  const [ display, setDisplay ] = useState({display: 'none'});
  const [ upvote, setUpvote ] = useState({fill: '#D7DADC'});
  const [ downvote, setDownvote ] = useState({fill: '#D7DADC'});
  const [ voteCountColor, setVoteCountColor ] = useState({color: '#D7DADC'});
  const [ voteCount, setVoteCount ] = useState(post.ups);

  const handleCommentsClick = () => {
    (display.display === 'none') ? setDisplay({display: 'block'}) : setDisplay({display: 'none'});
  }

  const handleUpvoteClick = () => {
    const clickUpvote = upvote.fill === '#D7DADC' ? setUpvote({fill: 'rgb(200, 255, 166)'}) : setUpvote({fill: '#D7DADC'});
    const clickDownvote = downvote.fill === 'rgb(255, 166, 166)' ? setDownvote({fill: '#D7DADC'}) : null;
    clickUpvote();
    clickDownvote();
  }

  const handleDownvoteClick = () => {
    const clickDownvote = downvote.fill === '#D7DADC' ? setDownvote({fill: 'rgb(255, 166, 166)'}) : setDownvote({fill: '#D7DADC'});
    const clickUpvote = upvote.fill === 'rgb(200, 255, 166)' ? setUpvote({fill: '#D7DADC'}) : null;
    clickDownvote();
    clickUpvote();
  }

  useEffect(() => {
    if (upvote.fill === 'rgb(200, 255, 166)') {
      setVoteCountColor({color: 'rgb(200, 255, 166)'});
      setVoteCount(post.ups + 1)
    } else if (downvote.fill === 'rgb(255, 166, 166)') {
      setVoteCountColor({color: 'rgb(255, 166, 166)'});
      setVoteCount(post.ups - 1)
    } else {
      setVoteCountColor({color: '#D7DADC'});
      setVoteCount(post.ups)
    }
  }, [downvote.fill, upvote.fill, post.ups])

  return (
    <li key={post.id} className={styles.postLi}>
      <div className={styles.votes}>
        <button onClick={handleUpvoteClick}><svg style={upvote} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z"/></svg></button> 
        <h5 style={voteCountColor}>{voteCount}</h5>
        <button onClick={handleDownvoteClick}><svg style={downvote} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/></svg></button>
      </div>
      <div className={styles.titles}>
        <h4>{post.subreddit_name_prefixed}</h4>
        <h2>{post.title}</h2>
      </div>
      <div className={styles.media}>
        {(post.url.includes('i.redd.it')) ? <img src={post.url} alt='' className={styles.images}/> : null}

        {(!post.media) ? null :
          (post.media.reddit_video) ?
          <video preload="auto" controls className={styles.videos}>
            <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          </video> 
          : null}

        {(post.url.includes('v.redd.it') || post.url.includes('i.redd.it')) ? null : <div className={styles.link}><a href={post.url} target="_blank" rel="noreferrer" >{post.url}</a></div>}             
      </div>
      <div className={styles.commentsBar}>
        <h3>u/{post.author}</h3>
        <h3>Posted {Math.round(((new Date().getTime()/1000) - post.created_utc)/3600)} hours ago</h3>
        <button onClick={handleCommentsClick}><h3>{post.num_comments} comments</h3></button>
      </div>
      <div style={display} className={styles.commentsArea}><Comments permalink={post.permalink} /></div>
    </li>
  )
}