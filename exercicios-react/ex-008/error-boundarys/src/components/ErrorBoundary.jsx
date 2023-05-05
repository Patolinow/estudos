import { Component } from 'react';

import {ErrorBoundary} from "react-error-boundary"

const FallbackRender = () =>{
  return (
    <div role='alert'>
      <p>Something went wrong!</p>
    </div>
  )
}

// class ErrorBoundary extends Component {
//   constructor() {
//     super();
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error) {
//     console.log(error);
//     this.setState({ hasError: true });
//   }

//   render() {
//     if (this.state.hasError) {
//       return <p>Something went wrong!</p>;
//     }
//     return this.props.children;
//   }
// }

export default FallbackRender;
