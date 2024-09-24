import React from 'react';
import { Container } from 'reactstrap';

const TopicTagLine = ({ text, padding = '20px' }) => {
  const containerStyle = {
    padding: padding,  // Use padding directly in the style
  };

  return (
    <Container fluid className="bg-black d-flex justify-content-center align-items-center">
      <h3 className="text-white m-0 text-center" style={containerStyle}>{text || "Explore Products!"}</h3>
    </Container>
  );
};

export default TopicTagLine;
