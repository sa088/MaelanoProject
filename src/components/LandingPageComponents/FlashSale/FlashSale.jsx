import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Progress } from 'reactstrap';
import styles from './FlashSale.module.scss';

const flashSaleItems = [
  { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img01.png'), text: '$33.99' },
  { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img02.png'), text: '$30.99' },
  { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img03.png'), text: '$23.99' },
  { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img04.png'), text: '$34.99' },
  { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img05.png'), text: '$36.99' },
  { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img06.png'), text: '$28.99' }
];

const flashSaleOffers = [
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer01.png'), text: 'Daily Deals' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer02.png'), text: 'Limited Time' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer03.png'), text: 'Seasonal' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer04.png'), text: 'Event Sale' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer05.png'), text: 'Group Buy' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer06.png'), text: 'Limited Stock' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer07.png'), text: 'Gift Card' },
  { imgSrc: require('../../../assets/images/FlashSaleOffers/FlashSaleOffer08.png'), text: 'Coupons' }
];

const middleImages = [
  { src: require('../../../assets/videos/FlashSale/FlashSale-Video01.mp4')},
  { src: require('../../../assets/videos/FlashSale/FlashSale-Video02.mp4')},
  { imgSrc: require('../../../assets/images/FlashSale/SaleOffer-Img01.png')},
  { imgSrc: require('../../../assets/images/FlashSale/SaleOffer-Img02.png')}
];

const lastVideos = [
  { src: require('../../../assets/videos/Video02.mp4')},
  { src: require('../../../assets/videos/Video03.mp4')},
  { src: require('../../../assets/videos/Video02.mp4')}
];

const FlashSale = () => {
  return (
    <Container fluid className={styles.flashSale}>

      {/* First Container with background image */}
      <Container fluid className={styles.containerBackground}>
        <Row className='text-center m-0 row-gap-3'>
          {flashSaleItems.map((item, idx) => (
            <Col key={idx} xs="12" sm="6" md="" lg="2" className='d-flex justify-content-center'>
              <Card className={styles.flashCard}>
                <img src={item.imgSrc} alt={`Item ${idx + 1}`} className="img-fluid" />
                <CardBody className="text-center p-0 pt-1 d-flex justify-content-between align-items-center">
                  <CardTitle className='text-warning fs-5 fw-bold'>{item.text}</CardTitle>
                  <CardTitle className='fs-6'><del>{item.text}</del></CardTitle>
                </CardBody>
                <Progress className={styles.progressBar} multi>
                  <Progress animated bar color="warning" value="30" />
                  <Progress animated bar color="white" value="65" />
                  <Progress animated bar color="warning" value="5" />
                </Progress>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center m-0 mt-4">
          {flashSaleOffers.map((item, idx) => (
            <Col key={idx} xs="6" sm="3" lg="">
              <img src={item.imgSrc} alt={`Item ${idx + 1}`} className="img-fluid rounded-top-5" />
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Second Container */}
      <Container fluid className="bg-white my-3">
        <Row className="row-gap-3">
          {middleImages.slice(0, 2).map((item, idx) => (
            <Col key={idx} xs="12" sm="6" md="4" className="d-flex align-items-stretch">
              <video 
                className={styles.flashSaleVideo1} 
                autoPlay muted loop playsInline controls 
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          ))}
          <Col xs="12" sm="12" md="4" className="d-flex">
            <Row className="row-gap-3">
              <Col sm="6" md="12">
                <img 
                  src={middleImages[2].imgSrc} 
                  alt="Middle Upper" 
                  className={styles.flashSaleImgs} 
                />
              </Col>
              <Col sm="6" md="12" className="d-flex align-items-end">
                <img 
                  src={middleImages[3].imgSrc} 
                  alt="Middle Lower" 
                  className={styles.flashSaleImgs} 
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Third Container */}
      <Container fluid className="bg-white my-3">
        <Row className="row-gap-2">
          {lastVideos.map((item, idx) => (
            <Col key={idx} xs="12" sm="4">
              <video 
                className={`img-fluid w-100 ${styles.flashSaleVideo2}`} 
                autoPlay muted loop playsInline controls 
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          ))}
        </Row>
      </Container>

    </Container>
  );
};

export default FlashSale;
