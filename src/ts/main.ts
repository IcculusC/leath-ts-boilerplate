///<reference path='./typings/jquery/jquery.d.ts' />

import $ = require('jquery');

class TestClass {
  
  constructor() {
    $('body').addClass('tested');
  }
}

$(new TestClass());