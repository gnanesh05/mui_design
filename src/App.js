import Sidebar from "./components/sidebar";
import RightBar from "./components/rightbar";
import Feed from "./components/feed";
import Navbar from "./components/navbar";
import Add from "./components/Add";
import {Box,Container, Stack} from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <RightBar/>
      </Stack>
      <Add/>
    </Box>
  );
}


export default App;
