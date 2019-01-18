import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: '#1B1C1D',
      height: '256px',
      paddingTop: '32px',
    };

    const socialStyle = {
      marginTop: '64px',
    };

    const email = 'hunterg@hawaiiantel.net';

    return (
        <div style={divStyle}>
          <Grid centered container style={socialStyle}>
            <Button size='huge'
                    circular color='instagram'
                    icon='instagram'
                    href='https://www.instagram.com/hunterstr8upg/'/>
            <Button size='huge'
                    circular color='linkedin'
                    icon='linkedin'
                    href='https://www.linkedin.com/in/greg-hunter-2b968150/'/>
            <Button size='huge'
                    circular color='google plus'
                    icon='mail'
                    href={`mailto:${email}`}/>
          </Grid>
        </div>
    );
  }
}

export default Footer;
