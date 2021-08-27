import React, { useState, useEffect} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

function Scontrino(props){
    const [state, setState]= useState(props.scontrino);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const id = open ? 'simple-popover' : undefined;

    return(
        <div className="scontrino" id={state.id} >
            Tipologia: {state.tipo}<br/>
            Prezzo: {state.prezzo}<br/>
            Data: {state.data.split("T")[0]}
            <br/>
            <div class="descrizione" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Descrizione
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Typography className="descrizione-popover">{state.descrizione}</Typography>
            </Popover>
        </div>
        
    );
}

export default Scontrino;