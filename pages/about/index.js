import Heading from '../../components/display/Heading'
import CenterPage from '../../components/layout/pages/CenterPage'
import TwoColumnPage from '../../components/layout/pages/TwoColumnPage';
import React from "react";
import { isLg } from '../../hooks/media';
import ResponsiveImage from '../../components/display/ResponsiveImage';
import Paragraph from '../../components/display/Paragraph';

export default function About() {
  const isLgScreen = isLg();
  
  let greeting = (
    <React.Fragment>
      <Heading>Peter Harral is a</Heading>
      <Paragraph>Fullstack software developer with expertise in AWS.</Paragraph>
    </React.Fragment>
  )

  let headshot= (
    <React.Fragment>
      <ResponsiveImage src="/images/headshot.jpg" borderStyle={"rounded"}/>
    </React.Fragment>
  )
  if (isLgScreen){
    return (
      <CenterPage>{headshot}{greeting}</CenterPage>
    );
  }else{
    return (
        <TwoColumnPage 
          leftChild={headshot}
          rightChild={greeting}
          rightGrow={2}
          gap={"30px"}
        >
        </TwoColumnPage>
    );
  }
}
