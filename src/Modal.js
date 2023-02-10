import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function Modal({ progress, resetModal }) {
    const [prog, setProg] = React.useState(0);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
          setProg((prevProg) => (prevProg >= 100 ? resetModal() : prevProg + progress));
        }, 100);
        return () => {
          clearInterval(timer);
        };
      }, []);

        return (
            <div>
                <div style = {{display : "flex", justifyContent : "flex-end"}}>
                    <button onClick={resetModal} style = {{border : "none"}}> X </button>
                </div>
                <div className='pa5 ma5'>
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={prog} />
                 </Box>
                 </div>
            </div>
            
        )
}


function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}