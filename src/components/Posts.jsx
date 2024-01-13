import './Posts.css'

export default function Posts ({ author, text }) {
    return (
      <div className='post-layout'>
        <span className='author-name'>{author}</span>
        <p className=''>{text}</p>
      </div>
    );
  };