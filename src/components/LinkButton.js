const LinkButton = ({ children, target, rel, ...props }) => (
  <a
    //
    title={children}
    className="custom-link-button"
    {...(target ? { target: '_blank' } : null)}
    {...(rel ? { rel: 'noopener noreferrer' } : null)}
    {...props}
  >
    {children}
  </a>
);

export default LinkButton;
