import React from 'react';
import TopicTagLine from '../../common/TopicTagLine/TopicTagLine';
import { Col, Container, Row } from 'reactstrap';
import styles from './FilteredProducts.module.scss';
import ProductCards from '../../common/ProductCards/ProductCards';
import ProductCardsWithRating from '../../common/ProductCardsWithRating/ProductCardsWithRating';

const discountedProductVideos = [
    { src: require('../../../assets/videos/Video02.mp4') },
    { src: require('../../../assets/videos/Video03.mp4') },
    { src: require('../../../assets/videos/FlashSale/FlashSale-Video01.mp4') },
    { src: require('../../../assets/videos/FlashSale/FlashSale-Video02.mp4') }
];

const newArrivalItems = [
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img01.png'), text: '$33.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img02.png'), text: '$30.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img03.png'), text: '$23.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img04.png'), text: '$34.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img05.png'), text: '$36.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img06.png'), text: '$28.99' }
];

const newSalesOffers = [
    { src: require('../../../assets/images/NewArrivals/NewSalesOffer-Img01.png') },
    { src: require('../../../assets/images/NewArrivals/NewSalesOffer-Img02.png') },
    { src: require('../../../assets/videos/Video02.mp4') },
    { src: require('../../../assets/videos/Video03.mp4') }
];

const highlightedBrands = [
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img01.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img02.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img03.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img04.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img05.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img06.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img07.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/Brand-Img08.png') },
    { imgSrc: require('../../../assets/images/HighlightedBrands/AllBrandsImg.png'), text: 'All Brands' }
];

const FilteredProducts = () => {
    const duplicatedArrivalItems = [...newArrivalItems, ...[...newArrivalItems].reverse()];

    return (
        <>
            <div>
                <TopicTagLine text="Save upto 10-50%" />
                <Container fluid className={styles.discountedProductsContainer}>
                    <Row className="m-0">
                        {discountedProductVideos.map((item, index) => (
                            <Col key={index} xs="12" sm="3" className="p-0 pe-2">
                                <video src={item.src} autoPlay muted loop playsInline className={styles.discountProductVideos}></video>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <Container fluid>
                <TopicTagLine text="New Arrivals" />
                <Container fluid className={styles.newArrivalContainer}>
                    <ProductCards cardItems={duplicatedArrivalItems} />
                </Container>
            </Container>

            <div>
                <TopicTagLine text="Explore more sales offer Just for You" />
                <Container fluid className={styles.newSalesContainer}>
                    <Row className="m-0">
                        {newSalesOffers.map((item, index) => (
                            <Col key={index} xs="12" sm="3" className="p-0 pe-2">
                                {/* <video src={item.src} autoPlay muted loop playsInline className={styles.discountProductVideos}></video> */}
                                {item.src.endsWith('.mp4') ? (
                                    <video
                                        src={item.src}
                                        autoPlay muted loop playsInline
                                        className={styles.discountProductVideos}
                                    ></video>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={`New Sale Offer ${index + 1}`}
                                        className={styles.discountProductImages}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div>
                <TopicTagLine text="Popular this Week" />
                <Container fluid className={styles.popularContainer}>
                    <ProductCardsWithRating cardRatingItems={newArrivalItems} />
                </Container>
            </div>

            <div>
                <TopicTagLine text="Popular this Month" />
                <Container fluid className={styles.popularContainer}>
                    <ProductCardsWithRating cardRatingItems={newArrivalItems} />
                </Container>
            </div>

            <div>
                <TopicTagLine text="Popular this Season" />
                <Container fluid className={styles.popularContainer}>
                    <ProductCardsWithRating cardRatingItems={newArrivalItems} />
                </Container>
            </div>

            <div>
                <TopicTagLine text="Highlighted Brands" />
                <Container fluid className={styles.highlightedBrandsContainer}>
                    <Row className="m-0">
                        {discountedProductVideos.map((item, index) => (
                            <Col key={index} xs="12" sm="3" className="p-0 pe-2">
                                <video src={item.src} autoPlay muted loop playsInline className={styles.highlightedBrandVideos}></video>
                            </Col>
                        ))}
                    </Row>
                    <Row className="text-center m-0 mt-3">
                        {highlightedBrands.map((item, index) => (
                            <Col 
                                key={index}
                                xs="6" sm="4"
                                lg={index === highlightedBrands.length - 1 ? "2" : ""}
                                className={styles.brandImageColumn}
                            >
                                <img src={item.imgSrc} alt={`Item ${index + 1}`} className={styles.highlightedBrandImgs} />
                                <p className={styles.centeredText}>{item.text}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FilteredProducts;