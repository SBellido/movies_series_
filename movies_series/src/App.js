import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import Button from 'devextreme-react/button';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Series } from './Series/Series';

class App extends React.Component {
    render() {
        return (
          <>
            <Button
              text="Click me"
              onClick={this.sayHelloWorld} />
            <Home />
            <Movies />
            <Series />
          </>
        );
    }
 
    sayHelloWorld() {
        alert('Hello world!')
    }
}
 
export default App;
