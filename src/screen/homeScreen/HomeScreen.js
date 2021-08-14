import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CategariesBar from "../../components/categories/CategariesBar";
import Videos from "../../components/videos/Videos";
import { getPopularVideos } from "../../redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  return (
    <>
      <Container>
        <CategariesBar />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <Videos video={video} key={video.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
