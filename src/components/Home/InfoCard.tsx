import React from "react";
import * as Styles from "../../styles/InfoCard.Styles";

const InfoCard = () => {
  const [expand, setExpand] = React.useState<boolean>(false);

  const changeExpand = () => {
    setExpand(!expand);
  };
  return (
    <Styles.Container expanded={expand}>
      <Styles.TextContent>
        {" "}
        Welcome to Atsui anime, Discover anime and you can view information
        about any anime and keep track of what you are watching.
        <br /> If you got a problem viewing any info, reload 🔃 the page
        <br /> <br />
        {expand == true && (
          <div>
            <span>
              Website is still in development, the current version is just a
              MVP(minimum viable product), Apologies if some links don't work or
              if it's not fully responsive, All constructive criticims is
              welcome, Contact ensorceler27@gmail.com
            </span>
          </div>
        )}
      </Styles.TextContent>
      {!expand ? (
        <Styles.ExpandIcon onClick={changeExpand} />
      ) : (
        <Styles.ContractIcon onClick={changeExpand} />
      )}
    </Styles.Container>
  );
};

export default InfoCard;
