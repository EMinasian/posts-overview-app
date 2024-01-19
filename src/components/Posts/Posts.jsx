import './Posts.css'
import '../../Global.css'

export default function Posts ({ author, body }) {
    return (
      <div className='post-layout'>
        <span className={author ? 'author-name' : 'required-error'}>{author || "* The author's name is required"}</span>
        <p className={body ? 'normal-text' : 'required-error'}>{body || "* The text field is required"}</p>
      </div>
    );
  };