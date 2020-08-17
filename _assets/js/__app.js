Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default);
  }
});

Vue.component("usertag", {
  props: {
    tag: String
  },
  functional: true,
  render(h, context) {
    return h(context.props.tag, context.data, context.children);
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
    selectedBreakpoint: 0,
    breakpoints: [
      {
        'title': 'sm',
        'value': '0',
        'wrapperGutter': 24,
        'columnGutter': 20,
        'styles': {}
      },
      {
        'title': 'md',
        'value': '768',
        'wrapperGutter': 32,
        'columnGutter': 32,
        'styles': {}
      },
      {
        'title': 'lg',
        'value': '1024',
        'wrapperGutter': 48,
        'columnGutter': 32,
        'styles': {}
      },
      {
        'title': 'xl',
        'value': '1440',
        'wrapperGutter': 106,
        'columnGutter': 32,
        'styles': {}
      }
    ],
    wrapper: {
      'maxwidth': '1440'
    },
    gridsettings: {
      isGutterVisible: false,
      isColumnsVisible: false
    },
    type: {
      styles: {},
      selected: 0,
      currentselector: false,
      blocks: [
        {
          tag: 'h1',
          text: 'H1 page headline',
          class: 'h1'
        },
        {
          tag: 'h2',
          text: 'H2 headline',
          class: 'h2'
        },
        {
          tag: 'h3',
          text: 'H3 headline',
          class: 'h3'
        }, 
        {
          tag: 'h4',
          text: 'H4 headline',
          class: 'h4'
        }, 
        {
          tag: 'h5',
          text: 'H5 headline',
          class: 'h5'
        }, 
        {
          tag: 'h6',
          text: 'H6 headline',
          class: 'h6'
        }, 
        {
          tag: 'p',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.',
          class: 'intro'
        }, 
        {
          tag: 'p',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.',
          class: 'body'
        }, 
        {
          tag: 'blockquote',
          text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.</p><cite>John Doe</cite>',
          class: 'quote'
        }, 
        {
          tag: 'p',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.',
          class: 'caption'
        }
      ]
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
    _tag_select,
    _tag_classname_change,
  },
  computed: {
    // calculates maximum content width fr each breakpoint
    contentwidth: function (e) {
      var app = this;
      var obj = {};

      for (var i = 0; i < app.breakpoints.length; i++) {
        if ((i + 1 < app.breakpoints.length)) {
          var w = Math.min(parseInt(app.breakpoints[i + 1].value) - 1, parseInt(app.wrapper.maxwidth));
          obj[i] = w - app.breakpoints[i].wrapperGutter * 2;

          console.log(app.breakpoints[i].wrapperGutter);
        }
        else {
          obj[i] = (app.wrapper.maxwidth) - app.breakpoints[i].wrapperGutter * 2;
        }
      }

      return obj;
    }
  }
});


