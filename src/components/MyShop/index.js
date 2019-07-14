import React, { Fragment } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class MyShop extends React.Component {

  render() {
    return (
      <Fragment>
        <div>My Shop page</div>
        <Grid>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={9}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  };
};

export default MyShop;