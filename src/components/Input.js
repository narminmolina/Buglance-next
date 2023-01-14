//  Global Components
import Label from 'components/Label';

const Input = ({ id, label, info, ...props }) => (
  <div className="custom-input">
    {label && <Label id={id} label={label} />}
    <input id={id} {...props} />
    {info && <em className="input-info">{info}</em>}
  </div>
);

export default Input;
