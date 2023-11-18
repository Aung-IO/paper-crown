import React from "react";
import { MagnifyingGlass } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
   <div className="flex items-center justify-center mt-28">
    <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#F8DE7E'
/>
   </div>
  );
}

export default LoadingSpinner;
