import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6 p-5">
          <img src="images/largestBroker.svg" alt="largestBroker img" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million Zeroda clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual Funds</li>
                <li>Bonds and Govt Securities</li>
              </ul>
            </div>
          </div>
          <img src="images/pressLogos.png" style={{width:"90%"}} className='mt-4'/>
        </div>
      </div>

    </div>
  )
}

export default Awards