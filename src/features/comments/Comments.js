import React from "react";
import { useSelector } from "react-redux";
import styles from './Comments.module.css';
import { selectComments, selectCommentsLoading } from "./commentsSlice";

export const Comments = () => {
  const comments = useSelector(selectComments);
  const loadingComments = useSelector(selectCommentsLoading);

  console.log(comments);

  return (
    <div></div>
  )
}