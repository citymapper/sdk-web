// The MIT License (MIT)

// Copyright (c) 2014 Call-Em-All

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'nunito, sans-serif',
    button: {
      fontWeight: 700,
      fontSize: '1rem',
    },
    h3: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#ebecf0',
      contrastText: '#000',
      dark: '#d8dce4',
    },
    secondary: {
      main: '#f5f5f7',
      contrastText: '#000',
    },
    brand: {
      main: '#37AB2F',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
