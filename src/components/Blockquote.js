//   Global Components
import Author from 'components/Author';

const Blockquote = ({ cite, color, type, author_type, author, text }) => {
  return (
    <blockquote cite={cite} data-color={color} data-type={type}>
      {author_type === 'complex' && <Author full_name={author.full_name} avatar={author.avatar} position={author.position} />}
      <h4>{text}</h4>
      {author_type === 'simple' && (
        <div className="simple-author">
          <strong>{author.full_name}</strong>
          <small>{author.position}</small>
        </div>
      )}
    </blockquote>
  );
};

export default Blockquote;
