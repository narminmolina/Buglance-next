const Checkbox = ({ id = 'id', label, link, ...props }) => {
  return (
    <div className="custom-checkbox">
      <input id={id} type="checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
      <a href={link.slug} target="_blank" title={link.title}>
        {link.title}
      </a>
    </div>
  );
};

export default Checkbox;
