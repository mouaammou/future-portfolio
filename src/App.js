import { Footer, Blog, Possibility, Features, WhatGpt3, Header } from './containers'
import {Brand, Cta, Navbar} from './components';
import './App.css'



function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <div className="main_content">
            <Brand />
            <WhatGpt3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
