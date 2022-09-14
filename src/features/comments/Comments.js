import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Comments = (props) => {
  const { permalink } = props;
  const [ localComments, setLocalComments ] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const json = await response.json();
      setLocalComments(json[1].data.children.map((comment) => comment.data));
    };

    getComments();
  }, [permalink]);

  return (
    <ul>
      {
        localComments.slice(0, 19).map((comment) => (
          <li key={comment.id}>
            <h5>u/{comment.author}</h5>
            <ReactMarkdown>{comment.body}</ReactMarkdown>
          </li>
        ))
      }
    </ul>
  )
}