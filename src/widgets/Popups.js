import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export let hyperparametersText = "The Hyperparameters of a Neural Networks are...";
export let architectureText = "The Architecture is...";
export let evaluationText = "The Evaluation of the Neural Network...";

export default function Popup({ text }) {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <Button 
          variant="contained" 
          {...bindTrigger(popupState)}
          style={{
            borderRadius: 90, 
            fontSize: 20,
            color: "#636D73", 
            minWidth: '10px',
            minHeight: '10px',
            maxWidth: '30px', 
            maxHeight: '30px',
            left: "0%"
          }}
          >
            <p class="mainText">&#128712;</p>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography>{text}</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}