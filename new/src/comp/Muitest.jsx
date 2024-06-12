import { Box, Button, ButtonGroup, Fab, IconButton, Typography, styled } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Muitest() {

 const Comp = styled("Box")({
    backgroundColor:"red",
    color:"white"
 })

 const Comp1 = styled("Box")({
    color:"white",
    fontSize:"32px"
 })

 const H1 = styled("Typography")({
  backgroundColor:"Yellow"
 })

 const H2 = styled("Typography")({
    fontSize:"50px"
 })

  return (
    <>
      <h1>Mui Comp</h1>
      <Comp1 sx={{
        backgroundColor:"green"
      }}>
        Hello everyone
      </Comp1>
      <Comp>
        Test Box
      </Comp>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AbcIcon />}
        endIcon={<AddCircleIcon />}
      >
        Test
      </Button>

      <IconButton color="error">
        <AbcIcon />
      </IconButton>

      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

        <Fab color="error">
            <AbcIcon color="success"/>
        </Fab>

        <H1 variant="h6">
            Hello class
        </H1>

        <H2>
          Hahahahahah
        </H2>

    </>
  );
}

export default Muitest;
