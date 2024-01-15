import Posts from "../Posts";
import "../../Global.css"

export default function NewPostDisplay({author, text}) {

  if (!author && !text) {
    return (<h2></h2>);
  }
  return (
    <div>
      <h2 className="main-title">The Post will Look Like This!</h2>
      <Posts author={author} text={text}/>
    </div>
  );
}
