//  SVG
import { LinkedIn, Mail } from 'svg';

const Author = ({ full_name, avatar, position, linked_in, mail }) => {
  return (
    <div className="author-info">
      <img className="author-info-visual" src={avatar} alt={full_name} />
      <div className="author-info-text">
        <strong>
          {full_name}
          {linked_in && (
            <a href={linked_in} title={`LinkedIn profile of ${full_name}`} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
          )}
          {mail && (
            <a href={mail} title={`Email address of ${full_name}`} target="_blank" rel="noopener noreferrer">
              <Mail />
            </a>
          )}
        </strong>
        <em>{position}</em>
      </div>
    </div>
  );
};

export default Author;
