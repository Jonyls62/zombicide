const ResponsiveImage = ({ src, alt }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100 p-0 bg-light rounded shadow">
      <img
        src={src}
        alt={alt}
        className="img-fluid rounded w-100"
        style={{ maxHeight: "80vh", objectFit: "contain" }}
      />
    </div>
  );
};

export default ResponsiveImage;
