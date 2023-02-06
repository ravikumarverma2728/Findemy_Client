import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import  '../Css/Navbar.css' ;
import  '../Css/Modal.css' ;
const style = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  width:600,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <a href='#' onClick={handleOpen}>
                    <span className='navbar-links-language-icon' >
                     <LanguageOutlinedIcon/>
                    </span>
        </a>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='row modal-main-row'>
                <div className='col-12 '>

                    <div className='row  modal-choose-a-language-row '>
                        <div className='col-11 modal-choose-a-language-text'>
                                Choose a language
                        </div>

                        <div className='col-1 close-icon-col' >
                             <CloseIcon onClick={handleClose}/>
                        </div>
                    </div>
                    
                    <div className='row mt-4'>
                        <div className='col-4'>
                            <ul >
                                <li className='modal-ul '>
                                    <a href='#'>
                                         English
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                         Deutsch
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                         Español
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                         Français
                                    </a>
                                </li>
                                <li className='modal-ul'> 
                                    <a href='#'>
                                         Bahasa Indonesia
                                    </a>
                                </li>
                                <li className='modal-ul'> 
                                    <a href='#'>
                                         Italiano
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-4'>
                            <ul >
                                <li className='modal-ul'>
                                    <a href='#'>
                                        日本語
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                         한국어
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                         Nederlands
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                         Polski
                                    </a>
                                </li>
                                <li className='modal-ul'> 
                                    <a href='#'>
                                         Português
                                    </a>
                                </li>
                                <li className='modal-ul'> 
                                    <a href='#'>
                                        Română
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                        <div className='col-4'>
                            <ul >
                                <li className='modal-ul'>
                                    <a href='#'>
                                        Русский
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                       ภาษาไทย
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                       Türkçe
                                    </a>
                                </li>
                                <li className='modal-ul'>
                                    <a href='#'>
                                       Tiếng Việt
                                    </a>
                                </li>
                                <li className='modal-ul'> 
                                    <a href='#'>
                                       中文(简体)
                                    </a>
                                </li>
                                <li className='modal-ul'> 
                                    <a href='#'>
                                       中文(繁體)
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>



                </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}