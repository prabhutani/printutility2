import { keys, values } from './data.js';
import Chart from './Chart.js';

function Copy() {
  return (
    <div style={{ margin: "2rem" }}>
      <div style={{ border: "1px solid black" }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {(() => {
            try { return (keys.map(data => <p>{data}</p>)) }
            catch (err) { return (<h1> No Data</h1>) }
          })()}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex-column', justifyContent: 'space-around' }}>
            {(() => {
              try { return (values.FirstName.map(data => <p>{data}</p>)) }
              catch (err) { return (<h1> No Data</h1>) }
            })()}
          </div>

          <div style={{ display: 'flex-column', justifyContent: 'space-around' }}>
            {(() => {
              try { return (values.LastName.map(data => <p>{data}</p>)) }
              catch (err) { return (<h1> No Data</h1>) }
            })()}
          </div>

          <div style={{ display: 'flex-column', justifyContent: 'space-around' }}>
            {(() => {
              try { return (values.userName.map(data => <p>{data}</p>)) }
              catch (err) { return (<h1> No Data</h1>) }
            })()}
          </div>
        </div>
        <div>
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Copy;