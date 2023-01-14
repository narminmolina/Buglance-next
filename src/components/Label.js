const Label = ({ id, label, info }) => (
  <label htmlFor={id} className="custom-label">
    {label} {info && <span className="custom-label-info">{info}</span>}
  </label>
);

export default Label;
