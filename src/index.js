import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss';
import Link from './Link';

class App extends React.Component {
  state = {
    CaptainKirkBio: {},
    Foo: null, // Foo is out component
  };

  componentDidMount() {
    this.onGetKirkBio();
    import(/* webpackChunkName: 'Foo' */ './Foo').then(Foo => {
      this.setState({ Foo: Foo.default });
    });
  }

  onGetKirkBio =  () => {
    try {
      const result =  fetch('http://stapi.co/api/v1/rest/character/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          title: 'James T. Kirk',
          name: 'James T. Kirk',
        },
      }).then((result)=>{
        return result.json()
      }).then((resultJSON)=>{
        const character = resultJSON.characters[0];
        this.setState({ CaptainKirkBio: character });

      });
      
    } catch (error) {
      console.log('error', error);
    }
  }; 

  render() {
    const { CaptainKirkBio, Foo } = this.state;
    return (
      <div className="app">
       <Link address="http://www.google.com" />
        <img alt="header" src="/dist/images/header.png" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so will
          be able to prove it.
      </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
              <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
            )}
        </section>
        {Foo ? <Foo /> : <p>Foo is loading</p>}
         
      </div>
    );

  }
}

ReactDOM.render(<App />, document.getElementById('app'));