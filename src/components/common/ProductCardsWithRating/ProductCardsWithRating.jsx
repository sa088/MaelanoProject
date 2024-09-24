import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';
import styles from './ProductCardsWithRating.module.scss';

const ProductCardsWithRating = ({ cardRatingItems }) => {
  return (
    <Container fluid className={styles.cardRatingContainer}>
    <Row className='text-center m-0 row-gap-4'>
        {cardRatingItems.map((item, idx) => (
            <Col key={idx} xs="12" sm="6" md="" lg="2" className='d-flex justify-content-center'>
                <Card className={styles.cardItems}>
                    <img src={item.imgSrc} alt={`Item ${idx + 1}`} className="img-fluid" />
                    <CardBody className="text-start p-0 pt-2">
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
  )
}

export default ProductCardsWithRating;