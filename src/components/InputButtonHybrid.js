const InputButtonHybrid = ({ id, placeholder, cta, toggleModal, ...props }) => {
  return (
    <div className="input-button-hybrid" {...props}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        <input id={id} type="text" name="" aria-label={cta} placeholder={placeholder} autoComplete="true" required />
        <button type="submit">{cta}</button>
      </form>
    </div>
  );
};

export default InputButtonHybrid;
