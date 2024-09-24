import React, { useState } from 'react';
import TopicTagLine from '../../common/TopicTagLine/TopicTagLine';
import { Button, Col, Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, NavLink, Row } from 'reactstrap';
import styles from './RecommendedProducts.module.scss';
import recommendedVideo from "../../../assets/videos/Video03.mp4";
import ProductCardsWithRating from '../../common/ProductCardsWithRating/ProductCardsWithRating';

const categories = ['All', 'Clothing', 'Shoes', 'Jewelry', 'Bags', 'Mobiles', 'Laptops'];

const recommendedSections = [
    { imgSrc: require('../../../assets/images/RecommendedSections/Recommended-Img01.png'), text: 'Casual' },
    { imgSrc: require('../../../assets/images/RecommendedSections/Recommended-Img02.png'), text: 'Top Rated' },
    { imgSrc: require('../../../assets/images/RecommendedSections/Recommended-Img03.png'), text: 'Accessories' },
    { imgSrc: require('../../../assets/images/RecommendedSections/Recommended-Img04.png'), text: 'Party Wear' },
    { imgSrc: require('../../../assets/images/RecommendedSections/Recommended-Img05.png'), text: 'Summer Collection' },
    { imgSrc: require('../../../assets/images/RecommendedSections/Recommended-Img06.png'), text: 'On Sale' }
];

const recommendedItems = [
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img01.png'), text: '$33.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img02.png'), text: '$30.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img03.png'), text: '$23.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img04.png'), text: '$34.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img05.png'), text: '$36.99' },
    { imgSrc: require('../../../assets/images/NewArrivals/NewArrival-Img06.png'), text: '$28.99' }
];

const RecommendedProducts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const duplicatedRecommendedItems = [...recommendedItems, ...[...recommendedItems].reverse(), ...recommendedItems, ...[...recommendedItems].reverse()];

    return (
        <div>
            <TopicTagLine text="Recommended" />
            <Container fluid className={styles.recommendedProductCategories}>
                <Navbar className={styles.navbar} expand="md">
                    <NavbarToggler onClick={toggle} className={styles.navbarToggler} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="" navbar>
                            {categories.map((item, index) => (
                                <NavItem>
                                    <NavLink href="#" className={styles.navLink}>{item}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
            <Container fluid className={styles.mainContainer}>
                <Row className='m-0'>
                    <Col xs="12" md="6" className={styles.mainContainerFirstColumn}>
                        <video src={recommendedVideo} autoPlay muted loop playsInline controls className={styles.recommendedFirstVideo}></video>
                    </Col>
                    <Col xs="12" md="6" className={styles.mainContainerSecondColumn}>
                        {/* <video src={recommendedVideo}></video> */}
                        <Row className={styles.recommendedCategoriesRow}>
                            {recommendedSections.map((item, idx) => (
                                <Col key={idx} xs="6" sm="4" className={styles.recommendedCategoriesImgColumn}>
                                    <img src={item.imgSrc} alt={`Item ${idx + 1}`} className={styles.recommendedCategoriesImg} />
                                    <p>{item.text}</p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={styles.recommendedProductsContainer}>
                <h4 className={styles.recommendedHeading}>Recommended Products</h4>
                <Container fluid className={styles.recommendedProductItems}>
                    <ProductCardsWithRating cardRatingItems={duplicatedRecommendedItems} />
                </Container>
                <Container fluid className={styles.btnContainer}>
                    <Button className={styles.backToTopBtn}>BACK TO TOP</Button>
                </Container>
            </Container>
        </div>
    )
}

export default RecommendedProducts;