import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AxiosIstance from './commons/AxiosIstance';
import {TipologieContext} from './Contexts/TipologieContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [tipologie, setTipologie]= useContext(TipologieContext);

  const [tipo,setTipo]=useState("");
  const [prezzo, setPrezzo]=useState(0);
  const [data, setData]=useState(new Date().toISOString().substr(0, 10));
  const [descrizione, setDescrizione]= useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(data)
    console.log(descrizione)
  };

  const checkScontrino=()=>{
    //checks if scontrino is good to post
    if(tipo === "")return false;
    if(prezzo === 0)return false;
    if(data === "")return false;
    return true;
  };

  const addScontrino=()=>{
    if(checkScontrino()){ 
        AxiosIstance.post("/addScontrino",{
        tipo: tipo,
        prezzo: prezzo,
        data: data,
        descrizione: descrizione
      }).then((response)=>{
        alert("aggiunto Scontrino")
      }).catch((err)=>{alert("errore aggiunta scontrino")});
    }
    setOpen(false);
  };

  return (
    <div>
        <PostAddIcon className="addButton" fontSize="large" onClick={handleClickOpen}/>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Aggiungi il tuo scontrino</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="descrizione"
            label="descrizione"
            type="text"
            onChange={(event) => setDescrizione(event.target.value)}
            value={descrizione}
            fullWidth
            multiline
          />
          <TextField
            margin="dense"
            name="prezzo"
            label="prezzo"
            type="number"
            onChange={(event) => setPrezzo(event.target.value)}
            value={prezzo}
          />
          <TextField
            name="data"
            label="Giorno Spesa"
            type="date"
            onChange={(e)=>setData(e.target.value)}
            value={data}
            className="datePicker"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <InputLabel id="Tipologia">Tipologia</InputLabel>
            <Select
              labelId="Tipologia"
              id="selectTipologia"
              value={tipo}
              onChange={(event)=>setTipo(event.target.value)}
              displayEmpty
            >
              <MenuItem value={""}>Seleziona Tipo</MenuItem>
              {tipologie.map((el)=>{
                return <MenuItem value={el.tipo}>{el.tipo}</MenuItem>
              })}
              
            </Select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addScontrino} color="primary">
            Aggiungi Scontrino
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};