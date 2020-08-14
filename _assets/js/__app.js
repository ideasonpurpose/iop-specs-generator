Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default);
  }
});

var app = new Vue({
  el: '#app',
  data: {
    colors: [
      {
        'title': 'white',
        'code': '#fff'
      }, {
        'title': 'black',
        'code': '#000'
      }
    ],
    breakpoints: [
      {
        'title': 'sm',
        'value': '0'
      },
      {
        'title': 'md',
        'value': '768'
      },
      {
        'title': 'lg',
        'value': '1024'
      },
      {
        'title': 'xl',
        'value': '1440'
      }
    ],
    wrapper: {
      'gutter': ['24', '32', '48', '106'],
      'maxwidth': '1440'
    },
    column: {
      'gutter': ['20', '32', '32', '32']
    },
    gridsettings: {
      isGutterVisible: false,
      isColumnsVisible: false
    }
  },
  methods: {
    _color_add,
    _color_remove,
    _breakpoint_add,
    _breakpoint_remove,
    _download_file,
    _download_file_all,
    _download_app_data,
    _download_colors,
    _download_layout,
  },
  computed: {
    // calculates maximum content width fr each breakpoint
    contentwidth: function(e){
      var app = this;
      var obj = {};

      for (var i = 0; i < app.breakpoints.length; i++) {
        if ( (i + 1 < app.breakpoints.length) ) {
          var w = Math.min(parseInt( app.breakpoints[i+1].value ) - 1, parseInt( app.wrapper.maxwidth));
          obj[i] = w - app.wrapper.gutter[i]*2;
        } 
        else {
          obj[i] = (app.wrapper.maxwidth) - app.wrapper.gutter[i]*2;
        }
      }

      return obj;
    }
  }
});


