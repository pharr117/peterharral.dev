import Heading from '../components/display/Heading'
import CenterPage from '../components/layout/pages/CenterPage'
import TwoColumnPage from '../components/layout/pages/TwoColumnPage';
import React from "react";
import { isLg } from '../hooks/media';
import ResponsiveImage from '../components/display/ResponsiveImage';

export default function Home({docsManifest}) {
  const isLgScreen = isLg();
  let greeting = (
    <React.Fragment>
      <Heading>Hello</Heading>
      <Heading component="h2">Hello</Heading>
      <Heading component="h3">Hello</Heading>
      <Heading component="h4">Hello</Heading>
      <Heading component="h5">Hello</Heading>
      <Heading component="h6">Hello</Heading>
    </React.Fragment>
  )

  let headshot= (
    <React.Fragment>
      <ResponsiveImage src="/images/headshot.jpg" />
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
        >
        </TwoColumnPage>
    );
  }
}

//could load file at ssr-time for data
//definitely not slower than the public axios fetch
export async function getServerSideProps(context) {
  var data = require("../public/docs-manifest.json");
  return {
    props: {
      docsManifest: data
    }
  }
}