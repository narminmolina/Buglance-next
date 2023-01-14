//  Global Components
import CardBlogPost from 'components/CardBlogPost';
import CardSolution from 'components/CardSolution';

const Cards = ({ cards = [], type = 'blog', columns = 3 }) => (
  <div className="cards" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
    {cards.map((card, i) => (type === 'blog' ? <CardBlogPost key={i} {...card} /> : <CardSolution key={i} {...card} />))}
  </div>
);

export default Cards;
