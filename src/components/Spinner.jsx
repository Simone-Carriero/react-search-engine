import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

const Spinner = () => (
  <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor='#c0efff'
      color='#e15b64'
  />
)


export default Spinner