import React from 'react'
import { Link } from 'react-router-dom'

const Welcome: React.StatelessComponent<{}> = () => (
  <div className="Welcome">
    <div className="Welcome-header">
      <img src={process.env.PUBLIC_URL + '/imgs/logo.svg'} className="Welcome-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="Welcome-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Link to="/about">About</Link>
    <style jsx>{`
      .Welcome {
        text-align: center;
      }

      .Welcome-logo {
        animation: Welcome-logo-spin infinite 20s linear;
        height: 80px;
      }

      .Welcome-header {
        background-color: #222;
        height: 150px;
        padding: 20px;
        color: white;
      }

      .Welcome-intro {
        font-size: large;
      }

      @keyframes Welcome-logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

export default Welcome
