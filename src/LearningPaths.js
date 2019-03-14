import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const LearningPaths = (props) => {
  return (
    <div className="otherLearning">
      <Card className="moreLearning">
        <CardImg src="https://cdn.optimizely.com/img/392850087/f15f3178869a4165bdcf24fb595aaa33.jpg" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Full-Time On Campus</CardTitle>
          <CardSubtitle>Learn in-person alongside local peers and instructors.

</CardSubtitle>
          
        </CardBody>
      </Card>

       <Card className="moreLearning">
        <CardImg src="https://cdn.optimizely.com/img/392850087/344d6d55a4b843d48e4af617a553a14b.jpg" title="source: imgur.com" />
        <CardBody>
          <CardTitle>One on One Mentoring Sessions</CardTitle>
          <CardSubtitle>Get paired with an expert to practice challenges and get feedback. </CardSubtitle>
          
        </CardBody>
      </Card>

      <Card className="moreLearning">
        <CardImg src="https://cdn.optimizely.com/img/392850087/5b1aab90444249f2b1a67628c0c2991a.jpg" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Remote Options</CardTitle>
          <CardSubtitle>Save on commuting time or join us from anywhere online.</CardSubtitle>
          
        </CardBody>
      </Card>
    </div>
  );
};


export default LearningPaths;