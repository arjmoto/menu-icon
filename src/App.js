import React, {Component} from 'react';
import Item from './components/Item';
class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="d-flex justify-content-center">
              <Item icon = "./img/home.png" name = "HOME"/>
              <Item icon = "./img/deals.png" name = "DEALS"/>
              <Item icon = "./img/upload3.png" name = "UPLOAD"/>
              <Item icon = "./img/food.png" name = "WORK"/>
              <Item icon = "./img/settings.png" name = "SETTINGS"/>
          </div>
      </div>
          
    );
  }
}

export default App;
