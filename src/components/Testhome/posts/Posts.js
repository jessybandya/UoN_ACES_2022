import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import {db} from "../../firebase";

const Posts = () => {
  const classes = Style();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    return unsubscribe;
  }, []);

  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>
        {Array.from(posts).map((post) => (
          <Post
            key={post.id}
            ownerId={post.data.ownerId}
            postId={post.id}
            title={post.data.title}
            timestamp={post.data.timestamp}
            description={post.data.description}
            fileType={post.data.fileType}
            fileData={post.data.fileData}
            noLikes={post.data.noLikes}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
 
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default Posts;
