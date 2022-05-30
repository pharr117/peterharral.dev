import Heading from '../components/display/Heading'
import CenterPage from '../components/layout/pages/CenterPage'
import TwoColumnPage from '../components/layout/pages/TwoColumnPage';
import React from "react";

export default function Home() {
  return (
      <TwoColumnPage 
        leftChild={
          <React.Fragment>
              <Heading>Hello</Heading>
              <Heading component="h2">Hello</Heading>
              <Heading component="h3">Hello</Heading>
              <Heading component="h4">Hello</Heading>
              <Heading component="h5">Hello</Heading>
              <Heading component="h6">Hello</Heading>
          </React.Fragment>
        }
        rightChild={
          <React.Fragment>
            <Heading>Hello</Heading>
            <Heading component="h2">Hello</Heading>
            <Heading component="h3">Hello</Heading>
            <Heading component="h4">Hello</Heading>
            <Heading component="h5">Hello</Heading>
            <Heading component="h6">Hello</Heading>
          </React.Fragment>
        }
        leftGrow={2}
      >
      </TwoColumnPage>
  );
}
