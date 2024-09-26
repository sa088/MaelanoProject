import React from 'react'
import styles from './ShopByCategory.module.scss';
import TopicTagLine from '../../common/TopicTagLine/TopicTagLine';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';
import categoryVideo from '../../../assets/videos/Video01.mp4';

const shopByCategory = [
    { imgSrc: require('../../../assets/images/ShopByCategory/SBC-Img01.png'), text: 'Shoes' },
    { imgSrc: require('../../../assets/images/ShopByCategory/SBC-Img02.png'), text: 'Makeup' },
    { imgSrc: require('../../../assets/images/ShopByCategory/SBC-Img03.png'), text: 'Bags' },
    { imgSrc: require('../../../assets/images/ShopByCategory/SBC-Img04.png'), text: 'Clothing' },
    { imgSrc: require('../../../assets/images/ShopByCategory/SBC-Img05.png'), text: 'Sofas' },
    { imgSrc: require('../../../assets/images/ShopByCategory/SBC-Img06.png'), text: 'Electronics' }
];

const topRatedProducts = [
    { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img01.png'), text: '$33.99' },
    { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img02.png'), text: '$30.99' },
    { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img03.png'), text: '$23.99' },
    { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img04.png'), text: '$34.99' },
    { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img05.png'), text: '$36.99' },
    { imgSrc: require('../../../assets/images/FlashSale/FlashSale-Img06.png'), text: '$28.99' }
];

const topRatedVideos = [
    { src: require('../../../assets/videos/Video02.mp4') },
    { src: require('../../../assets/videos/Video03.mp4') },
    { src: require('../../../assets/videos/Video02.mp4') }
];

const lowPriceOffers = [
    { src: require('../../../assets/images/LowPriceOffers/LPO-Img01.png') },
    { src: require('../../../assets/images/LowPriceOffers/LPO-Img02.png') },
    { src: require('../../../assets/images/LowPriceOffers/LPO-Img03.png') },
    { src: require('../../../assets/images/LowPriceOffers/LPO-Img04.png') }
];

const ShopByCategory = () => {
    // Duplicate the shopByCategory array to create 12 items by repeating the same 6 images.
    const duplicatedCategories = [...shopByCategory, ...[...shopByCategory].reverse()];

    return (
        <>
            <div>
                <TopicTagLine text="Explore your Interests, Shop by Category" />
                <Container fluid>
                    <Row className="text-center m-0 my-3">
                        {duplicatedCategories.map((item, index) => (
                            <Col key={index} xs="6" sm="3" lg="2">
                                <img src={item.imgSrc} alt={`Item ${index + 1}`} className={styles.categoryImages} />
                                <p>{item.text}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Container fluid className="m-0 mb-3">
                    <video className={styles.categoryVideo} autoPlay muted loop playsInline controls >
                        <source src={categoryVideo} type='video/mp4' />
                    </video>
                </Container>
            </div>
            <div>
                <TopicTagLine text="Discover the Best, Top-Rated Choices" />
                <Container fluid className={styles.topRatedContainer}>
                    <Row className='text-center m-0 row-gap-3'>
                        {topRatedProducts.map((item, idx) => (
                            <Col key={idx} xs="12" sm="6" md="" lg="2" className='d-flex justify-content-center'>
                                <Card className={styles.flashCard}>
                                    <img src={item.imgSrc} alt={`Item ${idx + 1}`} className="img-fluid" />
                                    <CardBody className="text-start p-0 pt-2 px-2">
                                        <CardSubtitle>Product name here</CardSubtitle>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <CardTitle className='text-warning fs-5 fw-bold'>{item.text}</CardTitle>
                                            <CardTitle className='fs-6'><del>{item.text}</del></CardTitle>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <CardSubtitle><i class="fa fa-regular fa-star"></i> 5.0 (300)</CardSubtitle>
                                            <CardSubtitle>2k sold</CardSubtitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Container fluid className="bg-white my-3">
                    <Row className="m-0 row-gap-2">
                        {topRatedVideos.map((item, idx) => (
                            <Col key={idx} xs="12" sm="4">
                                <video
                                    className={styles.topRatedVideos}
                                    autoPlay muted loop playsInline controls
                                >
                                    <source src={item.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div>
                <TopicTagLine text="Don't be slow! Our prices are low" />
                <Container fluid className={styles.lowPriceContainer}>
                    <Row className="m-0 row-gap-3">
                        {lowPriceOffers.map((item, index) => (
                            <Col key={index} xs="12" sm="6" className={styles.lowPriceColumns}>
                                <img src={item.src} alt={`Offer ${index + 1}`} className="img-fluid" />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ShopByCategory;
