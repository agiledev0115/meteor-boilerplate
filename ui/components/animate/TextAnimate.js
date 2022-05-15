/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

export default function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  text: PropTypes.string.isRequired,
  variants: PropTypes.object,
  sx: PropTypes.object,
};
