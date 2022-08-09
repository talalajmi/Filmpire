import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

function Search() {
  const [query, setQuery] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
