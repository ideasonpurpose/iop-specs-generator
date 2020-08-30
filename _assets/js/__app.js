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

    /**
     * User generated + default data
     */

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
    fonts: [],
    specimen: [
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
        text: '<p>Blockquote ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.</p>',
        class: 'quote'
      },
      {
        tag: 'cite',
        text: '<p>Citation ipsum dolor sit amet</p>',
        class: 'cite'
      },
      {
        tag: 'figcaption',
        text: 'Figcaption ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros a nulla bibendum laoreet.',
        class: 'caption'
      }
    ],

    /**
     * Static app data
     */

    gridsettings: {
      isGutterVisible: false,
      isColumnsVisible: false
    },
    bindstyles: {}, // bridge for editing styles
    currentselector: false, // element classname
    selectedTagIndex: null, // element index
    googlefonts: {},
    selectedBreakpoint: 0
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
    _download_fonts,
    _download_typography,
    _tag_add,
    _tag_remove,
    _tag_select,
    _tag_deselect,
    _tag_classname_change,
    _font_add,
    _font_remove,
    _load_file,
    _load_save,
  },

  computed: {
    _content_width,
    _import_googlefonts_string
  },

  mounted() {
    window.addEventListener('keydown', function (e) {
      var key = e.code;

      // close the text editor sidebar on ESC key
      if (key === 'Escape') app._tag_deselect();
    });
  }
});


