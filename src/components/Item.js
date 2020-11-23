import React, {Component} from 'react';
class Item extends Component {
    render() {
        return(

               <div className="p-5">
                   <img src={this.props.icon} alt={this.props.name} />
                   <p>{this.props.name}</p>
               </div>
        )
    }
}
export default Item;