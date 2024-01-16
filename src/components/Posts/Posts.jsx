import './Posts.css'
import '../../Global.css'

export default function Posts ({ author, text }) {
    return (
      <div className='post-layout'>
        <span className={author ? 'author-name' : 'required-error'}>{author || "* The author's name is required"}</span>
        <p className={text ? 'normal-text' : 'required-error'}>{text || "* The text field is required"}</p>
      </div>
    );
  };