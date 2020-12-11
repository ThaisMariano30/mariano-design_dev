// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

import Alert from 'bootstrap/js/dist/alert';

import { createPopper } from '@popperjs/core/lib/popper-lite.js';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

createPopper(button, tooltip, {
  modifiers: [preventOverflow, flip],
});

const reference = document.querySelector('#reference');
const popper = document.querySelector('#popper');createPopper(

reference, popper, {
  // options
  
});

// esm
import { popperGenerator } from '@popperjs/core';

// cjs
const { popperGenerator } = require('@popperjs/core');

// umd
const { popperGenerator } = Popper;

