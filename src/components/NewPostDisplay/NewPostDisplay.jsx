import Posts from "../Posts";
import "./NewPostDisplay.css"
import '../../Global.css'

export default function NewPostDisplay({author, text}) {

  if (!author && !text) {
    return (<></>);
  }
  return (
    <div className="display-new-post">
      <Posts author={author} text={text}/>
      <p className="normal-text">The Post will Look Like This!</p>
    </div>
  );
}
