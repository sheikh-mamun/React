
import PropTypes from 'prop-types';

function ExampleCarouselImage({ text }) {
  return (
    <div style={{ height: '400px', backgroundColor: '#777', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <h3>{text}</h3>
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
