import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        New Posts
        </div>
      <div className={s.posts}>
        <Post message="Текстовое сообщение для вывода" age="20"/>
        <Post message="Комментарий намбер ван" age="20"/>
      </div>
    </div>
  );
};

export default MyPosts;