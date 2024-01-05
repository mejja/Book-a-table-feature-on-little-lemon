import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReserveForm from './ReserveForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25em',
  height: '30em',
  minHeight:'35em',
  bgcolor: '#f2efef',
  border: '10px solid #495e57',
  boxShadow: 60,
  padding:'0px',
  borderRadius:5,
  p: 4,
};

export default function ReserveTableModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="ochre" size="medium"
       style={{maxHeight: "4em",  minWidth: "4em", minHeight: "4em", fontFamily: "Karla,sans-serif", fontSize: "18px", fontWeight: "800", borderRadius: "3em"}}
      onClick={handleOpen}>RESERVE A TABLE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Reserve table button */}
        <Box sx={style}>
          <Box sx={{marginTop:-4, background:"#495e57",marginX:-5}}>
          <Typography id="modal-modal-title" variant="h3" component="h2" textAlign={"center"} color={'#f4ce14'} fontWeight={"bold"}>
           RESERVE NOW
          </Typography>
          </Box>
         <ReserveForm />
        </Box>
      </Modal>
    </div>
  );
}