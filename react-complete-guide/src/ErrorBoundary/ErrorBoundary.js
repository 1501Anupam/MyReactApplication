import React, {Component} from 'react';

class errorBoundary extends Component {
state = {
hasError: false,
errorMessage: ''
}

componentDidCatch = (error, info)=> {
this.setState({hasError: error, errorMessage: info});
}

render() {
    if(this.state.hasError) {
        return <h1>{this.state.errorMessage}</h1>;
    }
    else {
        return this.props.children;
    }
  }
}

export default errorBoundary;