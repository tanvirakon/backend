import react from "react";

function Template(props) {
  const emojiList = props.emojiList;

  //2ta return
  //map r vitrer callback function ta alada likhe nclm : bujar subidhar jnno. pore map r mddheoi direct bpsay dc

  return (
    <dl className="dictionary">
      {emojiList.map(function createTemplate(el) {
        return (
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {el.emoji}
              </span>
              <span>{el.name}</span>
            </dt>
            <dd>meaning={el.meaning}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export default Template;
