import Heading from '../../components/display/Heading'
import CenterPage from '../../components/layout/pages/CenterPage'
import React from "react";
import { isLg } from '../../hooks/media';
import Paragraph from '../../components/display/Paragraph';
import ThreeColumnPage from '../../components/layout/pages/ThreeColumnPage';
import Categories from '../../components/display/Categories';

export default function About() {
    const isLgScreen = isLg();

    let categories = [];

    let disclaimer = (
        <React.Fragment>
            {
                categories.length ? <React.Fragment>
                    <Heading component={"h3"}>Categories</Heading>
                    <Categories categories={categories}/>
                </React.Fragment>: null
            }
            <Heading component={"h3"}>Disclaimer</Heading>
            <Paragraph>All opinions expressed here are my own and do not express the views of my employer.</Paragraph>
        </React.Fragment>
    )

    let recentPosts = (
        <React.Fragment>
            <Heading component={"h3"}>Recent Ramblings</Heading>
        </React.Fragment>
    )
    if (isLgScreen) {
        return (
            <CenterPage>{disclaimer}</CenterPage>
        );
    } else {
        return (
            <ThreeColumnPage
                leftChild={recentPosts}
                middleChild={null}
                rightChild={disclaimer}
                middleGrow={3}
                gap={"30px"}
            >
            </ThreeColumnPage>
        );
    }
}
