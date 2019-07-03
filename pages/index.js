import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Header from '../components/HomeHeader';
import Footer from '../components/HomeFooter';

import {
   styleBigAvatar,
   styleRaisedButton,
   styleHomepageFeature,
   styleH1,
} from '../lib/SharedStyles';

import withAuth from '../lib/withAuth';

const styleTeamMember = {
  textAlign: 'center',
  padding: '10px 5%',
};

const Index = ({ user }) => <div>
  <Head>
    <title>Yuma</title>
    <meta
        name="description"
        content="Yuma landing page"
    />
  </Head>
  <Header/>
  <div style={{padding: '10px 8%', fontSize: '15px'}}>
    <Grid container direction="row" justify="space-around" align="flex-start">
      <Grid item sm={12} xs={12} style={{textAlign: 'center'}}>
        <br/>
        <h1 style={styleH1}>Yuma</h1>
        <p>
          Our capstone project and beyond...
        </p>
        <p style={{textAlign: 'center'}}>
          <Link
              prefetch
              as="/books/demo-book/introduction"
              href="/public/read-chapter?bookSlug=demo-book&chapterSlug=introduction"
          >
            <Button variant="contained" color="primary"
                    style={styleRaisedButton}>
              Live Chat
            </Button>
          </Link>
          <a
              href="https://github.com/builderbook/builderbook"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Button variant="contained" color="secondary"
                    style={styleRaisedButton}>
              Contact Us
            </Button>
          </a>
        </p>
      </Grid>
    </Grid>

    <h1 style={styleH1}>How can you use Yuma?</h1>
    <Grid container direction="row" justify="space-around" align="flex-start">
      <Grid item sm={6} xs={12} style={styleHomepageFeature}>
        <p>
          <b> As learning material </b>
        </p>
        <p>
          {' '}
          Start with our
          <a
              href="https://github.com/builderbook/builderbook/tree/master/boilerplate"
              target="_blank"
              rel="noopener noreferrer"
          >
            {' '}
            boilerplate
          </a>
          &nbsp;or clone the entire project. Customize the code to build your
          own web app.
        </p>
      </Grid>
      <Grid item sm={6} xs={12} style={styleHomepageFeature}>
        <p>
          <b> To publish documentation or a book </b>
        </p>
        <p>
          Write documentation and books in Markdown. Write with your favorite
          code editor and sync
          content using Github.
        </p>
      </Grid>
    </Grid>

    <br/>

    <h1 style={styleH1}>Features</h1>
    <Grid container direction="row" justify="space-around" align="flex-start">
      <Grid item sm={6} xs={12} style={styleHomepageFeature}>
        <p>
          <b> Modern JavaScript stack </b>
        </p>
        <p>
          Be productive and ship fast with React.js, Material-UI, Next.js,
          Express.js, Mongoose,
          MongoDB. We keep the app
          <a
              href="https://github.com/builderbook/builderbook/blob/master/package.json"
              target="_blank"
              rel="noopener noreferrer"
          >
            &nbsp;dependencies&nbsp;
          </a>
          up-to-date.
        </p>
      </Grid>
      <Grid item sm={6} xs={12} style={styleHomepageFeature}>
        <p>
          <b> Popular third party APIs </b>
        </p>
        <p>
          Google for user authentication, Github for markdown and collaboration,
          AWS SES for
          transactional emails, MailChimp for newsletters, Stripe for selling.
        </p>
      </Grid>
      <Grid item sm={6} xs={12} style={styleHomepageFeature}>
        <p>
          <b> Blazing fast </b>
        </p>
        <p>
          Best of both worlds: the initial page load is server-side rendered and
          all subsequent
          loads are client-side rendered. Some pages are prefetched in the
          background.
        </p>
      </Grid>
      <Grid item sm={6} xs={12} style={styleHomepageFeature}>
        <p>
          <b> Deploy in under 60 seconds </b>
        </p>
        <p>
          We use this app to write, host, and sell
          <a
              href="https://builderbook.org/books/builder-book/introduction"
              target="_blank"
              rel="noopener noreferrer"
          >
            {' '}
            our book
          </a>
          . You are welcome to use this app as a boilerplate.
          <a
              href="https://github.com/builderbook/builderbook#deploy"
              target="_blank"
              rel="noopener noreferrer"
          >
            {' '}
            Deploy
          </a>
          &nbsp;it to your own domain in under 60 seconds using
          <a href="https://zeit.co/now" target="_blank"
             rel="noopener noreferrer">
            {' '}
            Now
          </a>
          .
        </p>
      </Grid>
    </Grid>

    <br/>

    <h1 style={styleH1}>The Team</h1>
    <div style={{textAlign: 'center'}}>
      We represent team SoFunFinTech, at Babson College
    </div>
    <br/>
    <Grid container direction="row" justify="space-around" align="flex-start">
      <Grid item sm={4} xs={12} style={styleTeamMember}>
        <Avatar
            src="https://team-sofunfintech.s3.amazonaws.com/picture-102741-1559884845.jpg"
            style={styleBigAvatar}
            alt="Ayush Chauhan"
        />
        <p>
          <a href="https://www.linkedin.com/in/ayush-chauhan-0934701b/" target="_blank"
             rel="noopener noreferrer">
            Ayush Chauhan
          </a>
          <br/>
          Seattle, WA
        </p>
        <p>
          Ayush is nice
        </p>
      </Grid>
      <Grid item sm={4} xs={12} style={styleTeamMember}>
        <Avatar
            src="https://team-sofunfintech.s3.amazonaws.com/picture-105836-1559885308.jpg"
            style={styleBigAvatar}
            alt="Jaana Pietari"
        />
        <p>
          <a href="https://github.com/klyburke" target="_blank"
             rel="noopener noreferrer">
            Jaana Pietari
          </a>
          <br/>
          Wellesley, MA
        </p>
        <p>
          Jaana is cool
        </p>
      </Grid>
      <Grid item sm={4} xs={12} style={styleTeamMember}>
        <Avatar
            src="https://team-sofunfintech.s3.amazonaws.com/picture-105351-1559883679.jpg"
            style={styleBigAvatar}
            alt="Ben Lewis"
        />
        <p>
          <a href="https://github.com/delgermurun" target="_blank"
             rel="noopener noreferrer">
            Ben Lewis
          </a>
          <br/>
          Wellesley, MA
        </p>
        <p>
          Ben is great
        </p>
      </Grid>
      <Grid item sm={4} xs={12} style={styleTeamMember}>
        <Avatar
            src="https://team-sofunfintech.s3.amazonaws.com/picture-105071-1559885059.jpg"
            style={styleBigAvatar}
            alt="Sali Bangoura"
        />
        <p>
          <a href="https://github.com/delgermurun" target="_blank"
             rel="noopener noreferrer">
            Sali Bangoura
          </a>
          <br/>
          Wellesley, MA
        </p>
        <p>
          Sali is great
        </p>
      </Grid>
      <Grid item sm={4} xs={12} style={styleTeamMember}>
        <Avatar
            src="https://team-sofunfintech.s3.amazonaws.com/picture-105266-1559885183.jpg"
            style={styleBigAvatar}
            alt="Dana Francois"
        />
        <p>
          <a href="https://github.com/delgermurun" target="_blank"
             rel="noopener noreferrer">
            Dana Francois
          </a>
          <br/>
          Wellesley, MA
        </p>
        <p>
          Dana is great
        </p>
      </Grid>
      <Grid item sm={4} xs={12} style={styleTeamMember}>
        <Avatar
            src="https://team-sofunfintech.s3.amazonaws.com/picture-105316-1559884948.jpg "
            style={styleBigAvatar}
            alt="Marc Dalmau Cardoza"
        />
        <p>
          <a href="https://github.com/delgermurun" target="_blank"
             rel="noopener noreferrer">
            Marc Dalmau Cardoza
          </a>
          <br/>
          Wellesley, MA
        </p>
        <p>
          Marc is great
        </p>
      </Grid>

    </Grid>

    <br/>
  </div>
  <Footer/>
</div>;

Index.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
};


Index.defaultProps = {
  user: null,
};

Index.getInitialProps = function getInitialProps() {
  const indexPage = true;
  return { indexPage };
};

export default withAuth(Index, { loginRequired: false });