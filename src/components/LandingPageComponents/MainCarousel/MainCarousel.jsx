import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import styles from './MainCarousel.module.scss';
import Video01 from '../../../assets/videos/Video01.mp4';
import Video02 from '../../../assets/videos/Video02.mp4';
import Video03 from '../../../assets/videos/Video03.mp4';

const MainCarousel = () => {
  return (
    <Container fluid className={styles.heroSection}>
      <Row>
        {/* Carousel */}
        <Col md={9}>
          <Carousel>
            <Carousel.Item>
              <video width="980" height="410" autoPlay muted playsInline>
                <source src={Video01} type="video/mp4"/>
              </video>
            </Carousel.Item>
            <Carousel.Item>
              <video width="980" height="410" autoPlay muted playsInline>
                <source src={Video01} type="video/mp4"/>
              </video>
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* Advertisement */}
        <Col md={3}>
          <Row>
            <div className={styles.heroAd}>
              <video width="308" height="200" autoPlay muted loop playsInline>
                <source src={Video02} type="video/mp4"/>
              </video>
            </div>
            <div className={styles.heroAd}>
              <video width="308" height="200" autoPlay muted loop playsInline>
                <source src={Video03} type="video/mp4"/>
              </video>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MainCarousel;