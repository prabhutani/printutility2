import './App.css';
import Copy from './Copy';
import { PDFExport } from "@progress/kendo-react-pdf";
import exportPDFWithMethod from "@progress/kendo-react-pdf";
import 'tachyons'
import { Component, useRef, createRef } from 'react';
import Modal from './Modal';

const initialState = {
  isModalActive: false,
  progress: 10
}

var exportComponent = createRef(null);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  // const exportPDFWithMethod = () => {
  //   let element = container.current || document.body;
  //   savePDF(element, {
  //     paperSize: "A4",
  //     // margin: 40,
  //     fileName: `Report for ${new Date().getFullYear()}`,
  //   });
  // };



  render() {
    var i = 50;
    const printer = () => {
      this.setState({ isModalActive: true }, () => { if (exportComponent.current) exportComponent.current.save(); })
    }
    const resetModal = () => {
      this.setState(initialState);
    }
    return (
      <div >
        {this.state.isModalActive && <Modal progress={this.state.progress} resetModal={resetModal} />}
        <div className={(this.state.isModalActive) && "dimmer"}>
          <button className='br3 fw7 bco f3 link shadow black pointer mt1 mb1 ma2 bg-orange' onClick={printer}>Print</button>
          <PDFExport scale={0.5} paperSize={"A4"} forcePageBreak='.page-break' ref={exportComponent}>
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
        </div>
      </div>
    )
  }
}

export default App;
