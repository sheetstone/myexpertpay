/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import style from './styles/style.scss';
import Welcome from './component/Welcome';
import TabList from './component/TabList';

export default function HomePage() {
  return (
    <article className={style.homepagebg}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="My ExpertPay homepage dashboard" />
      </Helmet>

      <Container>
        <Welcome />
      </Container>

      <TabList />
    </article>
  );
}
