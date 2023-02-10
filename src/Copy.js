import { keys, values } from './data.js';
import Chart from './Chart.js';

function Copy() {
  return (
    <div style={{margin : "2rem"}}>
      <div style={{ border: "1px solid black" }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {keys.map(data => <p>{data}</p>)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex-column', justifyContent: 'space-around' }}>
            {values.FirstName.map(data => <p>{data}</p>)}
          </div>

          <div style={{ display: 'flex-column', justifyContent: 'space-around' }}>
            {values.LastName.map(data => <p>{data}</p>)}
          </div>

          <div style={{ display: 'flex-column', justifyContent: 'space-around' }}>
            {values.userName.map(data => <p>{data}</p>)}
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