import '../sections/header';

import $ from 'jquery';
import sections from '@shopify/theme-sections';

$(document).ready(() => {
  sections.load([
    'header',
  ]);
});
