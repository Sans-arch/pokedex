import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';

export default function Navbar({ pokemonFilter }) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ backgroundColor: "#2d333b" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
            <Box component="img" src="/assets/logo_white.png" height="4.5em" />

            <Search onChange={e => pokemonFilter(e.target.value)}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
