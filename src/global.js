const getImgDimension = (imgSrc) => {
    const base_url = window.location.origin;

    let img = new Image();
    img.src = base_url + imgSrc;

    let width = img.width;
    let height = img.height;

    return ("Image Dimension: " +width + 'x' + height);
};

const ImgDimension = props => {
  return (
      <div style={{marginTop: 10 + 'px'}}>
        <b> {getImgDimension(props.src)} </b>
      </div>
  );
};

export { ImgDimension };
