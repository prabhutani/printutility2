import './App.css';
import Copy from './Copy';
import { PDFExport } from "@progress/kendo-react-pdf";
import 'tachyons'
import React, { Component, useRef, createRef } from 'react';
import Modal from './Modal';

const initialState = {
  startPrint: false,
  progress: 10
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.exportComponent = createRef(null);
    this.but = createRef(null);
  }

  componentDidUpdate = () => {
    if(this.state.startPrint) this.exportComponent.current.save();
  }

  render() {
    var i = 50;

    const initiatePrint = () => {
      this.setState({ startPrint: true })
    }

    const resetModal = () => {
      this.setState(initialState);
    }

    return (
      <div>
        {
          this.state.startPrint && (
            <div style={{ width: "100%", position: "fixed", zIndex: "2", top: "0" }}>
              <article className=" br2 bg-white pt2 pb3 ba b--black-10 mv4 mw6 shadow-5 center">
                <div className='flex justify-end pr3 pt2'>
                  <button id='butt' onClick={() => { this.setState({ startPrint: false }) }} className='ba b--near-white br3 flex-end shadow-4 dim pointer flex'> <p className='pa0 ma0 b'>X</p> </button>
                </div>
                <Modal progress={this.state.progress} resetModal={resetModal} />
              </article>
            </div>)
        }
        < div className={(this.state.startPrint) ? "dimmer" : ""}>
          <button className='br3 fw7 bco pl2 pr2 pb1 f4 link shadow white pointer mt1 mb1 ma2 bg-dark-blue' ref={this.but} onClick={initiatePrint}>Print</button>
          <PDFExport scale={0.5} forcePageBreak='.page-break' ref={this.exportComponent}>
            <div>
              {(() => {
                var items = [];
                while (i > 0) {
                  if (i === 50) { items.push(<div key={i}><Copy /> </div>); }
                  else items.push(<div key={i} className="page-break"><Copy /> </div>);
                  i--;
                }
                return items;
              })()}
            </div>
          </PDFExport>
        </div >
      </div >
    )
  }
}

export default App;
