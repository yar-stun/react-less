import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://avatars.mds.yandex.net/get-zen_doc/1348874/pub_5b8fd65584d0e300a99bda50_5b8fd823ea398000aa776c01/scale_1200"
        alt=""
      />
      {props.message}
      <div>{props.age}</div>
    </div>
  );
};

export default Post;