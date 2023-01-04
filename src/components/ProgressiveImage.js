const ProgressiveImage = ({ original_image, desktop = [], mobile = [], alt, width, height, className }) => {
  // const image = original_image + '?w=704&h=294';
  // const webp = image + '&fm=webp';
  // const jpeg = image + '&fm=jpg';

  return (
    <picture>
      {mobile.map(({ srcSet, type }, i) => (
        <source key={i} media="(max-width: 480px)" srcSet={srcSet} type={type} />
      ))}
      {desktop.map(({ srcSet, type }, i) => (
        <source key={i} srcSet={srcSet} type={type} />
      ))}
      <img
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        src={original_image}
        className={className}
        onError={({ target }) => {
          target.onerror = null;
          target.src = '/img/placeholder.jpg';
        }}
      />
    </picture>
  );
};

export default ProgressiveImage;
