import { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';

function CarouselWithModal({ images = [], height = '300px' }) {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageStyle = {
    height,
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const handleImageClick = (idx) => {
    setActiveIndex(idx);
    setShowModal(true);
  };

  return (
    <>
      <Carousel fade className="shadow rounded carousel-dark" style={{ height }}>
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              src={img}
              alt={`Project Screenshot ${idx + 1}`}
              className="d-block w-100"
              style={imageStyle}
              onClick={() => handleImageClick(idx)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body className="p-0">
          <Carousel
            fade
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            className="carousel-dark"
          >
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt={`Project Modal Screenshot ${idx + 1}`}
                  className="d-block w-100"
                  style={{ width: '100%', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CarouselWithModal;
