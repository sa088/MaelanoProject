import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Container, Row, Col } from 'reactstrap';
import styles from './MainCarousel.module.scss';
import Video01 from '../../../assets/videos/Video01.mp4';
import Video02 from '../../../assets/videos/Video02.mp4';
import Video03 from '../../../assets/videos/Video03.mp4';

const items = [
  { src: Video01 },
  { src: Video01 },
];

const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      key={index}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <video height="410" autoPlay muted playsInline>
        <source src={item.src} type="video/mp4" />
      </video>
    </CarouselItem>
  ));

  return (
    <Container fluid className={styles.heroSection}>
      <Row>
        {/* Carousel */}
        <Col md={9}>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>

        {/* Advertisement Videos */}
        <Col md={3}>
          <Row>
            <div className={styles.heroAd}>
              <video height="200" autoPlay muted loop playsInline>
                <source src={Video02} type="video/mp4" />
              </video>
            </div>
            <div className={styles.heroAd}>
              <video height="200" autoPlay muted loop playsInline>
                <source src={Video03} type="video/mp4" />
              </video>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCarousel;
