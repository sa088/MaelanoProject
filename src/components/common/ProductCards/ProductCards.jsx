import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import styles from './ProductCards.module.scss';

const ProductCards = ({ cardItems }) => {
    return (
        <Container fluid className={styles.productCards}>
            <Row className='text-center m-0 row-gap-3'>
                {cardItems?.map((item, idx) => (
                    <Col key={idx} xs="12" sm="6" md="" lg="2" className='d-flex justify-content-center'>
                        <Card className={styles.card}>
                            <img src={item.imgSrc} alt={`Item ${idx + 1}`} className="img-fluid" />
                            <CardBody className="text-center p-0 pt-1 d-flex justify-content-around align-items-center">
                                <CardTitle className='text-warning fs-5 fw-bold'>{item.text}</CardTitle>
                                <CardTitle className='fs-6'><del>{item.text}</del></CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductCards;