import React, { useState } from 'react'
import TopicTagLine from '../../common/TopicTagLine/TopicTagLine';
import styles from './TrendingSales.module.scss';
import { Button, Col, Container, Row } from 'reactstrap';
import ShoesVideo from '../../../assets/videos/Video02.mp4';
import FashionVideo from '../../../assets/videos/Video01.mp4';

// const trendingVideos = [
//     { src: require('../../../assets/videos/Video02.mp4')},
//     { src: require('../../../assets/videos/Video03.mp4')},
//     { src: require('../../../assets/videos/Video02.mp4')}
// ];

const TrendingSales = () => {
    const [mainVideo, setMainVideo] = useState(ShoesVideo);
    const [secondContainerVideo, setSecondContainerVideo] = useState(FashionVideo);

    const videoButtons = [
        { imgSrc: require('../../../assets/images/TrendingSales/TrendingShoe01.png'), video: require('../../../assets/videos/Video02.mp4') },
        { imgSrc: require('../../../assets/images/TrendingSales/TrendingShoe02.png'), video: require('../../../assets/videos/Video03.mp4') },
        { imgSrc: require('../../../assets/images/TrendingSales/TrendingShoe03.png'), video: require('../../../assets/videos/Video01.mp4') },
        { imgSrc: require('../../../assets/images/TrendingSales/TrendingShoe04.png'), video: require('../../../assets/videos/Video02.mp4') },
        { imgSrc: require('../../../assets/images/TrendingSales/TrendingShoe05.png'), video: require('../../../assets/videos/Video03.mp4') },
        { imgSrc: require('../../../assets/images/TrendingSales/TrendingShoe06.png'), video: require('../../../assets/videos/Video01.mp4') },
    ];

    const trendingVideos = [
        { src: require('../../../assets/videos//Video02.mp4') },
        { src: require('../../../assets/videos//Video03.mp4') },
        { src: require('../../../assets/videos//Video02.mp4') }
    ];

  return (
    <>
        <TopicTagLine text="Trending Sales Today!" />

        {/* First Trending Sales Container */}
        <Container fluid className={styles.trendingSalesContainer}>
            <Row className="m-0">
                <Col md="9" className="d-flex justify-content-center align-items-center position-relative p-0 pe-3">
                    <video
                        key={mainVideo}
                        src={mainVideo}
                        width="100%"
                        height="510px"
                        autoPlay muted loop playsInline
                        className={styles.trendingFirstColumnVideo}
                    ></video>

                    <div className={styles.leftVideoButtons}>
                        {videoButtons.slice(0, 3).map((btn, index) => (
                            <Button
                                key={index}
                                color="light"
                                className="d-block mb-2 border border-0 rounded-0"
                                onClick={() => setMainVideo(btn.video)}
                            >
                                <img src={btn.imgSrc} alt={`Trending Shoe ${index + 1}`} className={styles.imgVideoBtns} />
                            </Button>
                        ))}
                    </div>

                    <div className={styles.rightVideoButtons}>
                        {videoButtons.slice(3, 6).map((btn, index) => (
                            <Button
                                key={index}
                                color="light"
                                className="d-block mb-2 border border-0 rounded-0"
                                onClick={() => setMainVideo(btn.video)}
                            >
                                <img src={btn.imgSrc} alt={`Trending Shoe ${index + 1}`} className={styles.imgVideoBtns} />
                            </Button>
                        ))}
                    </div>
                </Col>

                <Col md="3" className="d-flex flex-column justify-content-between p-0">
                    <Row className="mb-2">
                        <Col className={styles.trendingSecondColumns}>
                            <video src={videoButtons[0].video} width="100%" height="250px" autoPlay muted loop playsInline className={styles.trendingSecondColumnVideos}></video>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.trendingSecondColumns}>
                            <video src={videoButtons[1].video} width="100%" height="250px" autoPlay muted loop playsInline className={styles.trendingSecondColumnVideos}></video>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        {/* Second Trending Sales Container */}
        <Container fluid className={styles.trendingSalesSecondContainer}>
            <Row className="m-0">
            <Col xs="12" md="6" className="d-flex justify-content-center align-items-center position-relative p-0 pe-2">
                    <video
                        key={secondContainerVideo}
                        src={secondContainerVideo}
                        width="100%"
                        height="380px"
                        autoPlay muted loop playsInline
                        className={styles.trendingBtnVideo}
                    ></video>

                    <div className={styles.centerVideoBtns}>
                        {videoButtons.slice(0, 3).map((btn, index) => (
                            <Button
                                key={index}
                                color="light"
                                className={styles.centerbtns}
                                onClick={() => setSecondContainerVideo(btn.video)}
                            >
                                <img src={btn.imgSrc} alt={`Trending Shoe ${index + 1}`} className={styles.imgVideoBtns} />
                            </Button>
                        ))}
                    </div>
                </Col>
                {trendingVideos.slice(1, 3).map((item, idx) => (
                    <Col key={idx} xs="12" md="3" className="p-0 pe-2">
                        <video src={item.src} autoPlay muted loop playsInline className={styles.trendingVideoSecondContainer}></video>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default TrendingSales;
