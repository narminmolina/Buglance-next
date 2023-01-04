//  SVG
import { Search, Close } from 'svg';

const Input = ({ placeholder, value, onSubmit, onChange, onClose, ...props }) => (
  <form className="search-input" {...props} onSubmit={onSubmit}>
    <input autoFocus={true} aria-label="Search input" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    <div className="search-icon">
      <Search />
    </div>
    <button type="button" className="close-icon" aria-label="Close search input" onClick={onClose}>
      <Close />
    </button>
  </form>
);

export default Input;
