import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { bgcolor } from '@mui/system';



LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function Modal({ progress, resetModal }) {
    const [prog, setProg] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProg((prevProg) => (prevProg >= 100 ? clearInterval() : ((progress) ?  prevProg + progress : prevProg)));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div style={{width : "100%", position : "fixed", zIndex : "2", top : "0"}}>
            <article className=" br2 bg-white pt2 pb3 ba b--black-10 mv4 mw6 shadow-5 center">
                <div className='flex justify-end pr3 pt2'>
                    <button onClick={resetModal} className='ba b--near-white br3 flex-end shadow-4 dim pointer flex'> <p className='pa0 ma0 b'>X</p> </button>
                </div>
                <main className="pa4 black-80">
                    <div className="measure">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgressWithLabel value={prog} />
                        </Box>
                    </div>
                </main>
            </article>
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