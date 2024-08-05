import { useReducer } from "react";
import { createContext } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    console.log("delete");
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId, 
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    // console.log("delete Post"+postId)
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Jaipur",
    body: "Hi frined, I'm going to Jaipur for my vacation.",
    reaction: 4,
    userId: "",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: 2,
    title: "Going to Udaipur",
    body: "Hi frined, I'm going to Udaipur for my vacation.",
    reaction: 9,
    userId: "",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: 3,
    title: "Going to Japan",
    body: "Hi frined, I'm going to Japan for my vacation.",
    reaction: 21,
    userId: "",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
];

export default PostListProvider;
