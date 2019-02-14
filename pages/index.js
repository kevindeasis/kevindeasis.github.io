import Head from 'next/head';

import Navigation from '../components/Navigation'
import Header from '../components/Header'

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {/* <link rel="shortcut icon" href="/static/favicon.png" /> */}
    <link rel="stylesheet" type="text/css" href="/static/bulma.min.css" />
    <title>Kevin De Asis!</title>
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
  </Head>
);

export default () => (
  <div>
    <Meta />
    <Navigation />


    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <Header />
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
  </section>
  </div>
)