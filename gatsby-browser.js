/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const $ = require("jquery")

export const onRouteUpdate = () => {
  $(document).ready(function () {

    var visible = false
    $( '#mobile-menu' ).hide()

    $( '#menu-button' ).click(function () {
      if( !visible ){
        visible = true
        $( '#mobile-menu' ).slideDown( 'slow' )
      } else {
        visible = false
        $( '#mobile-menu' ).slideUp( 'slow' )
      }
    })

    var xPos = 683
    var yPos = 350

    var length = $(window).scrollTop()
    var width = $(window).width()

    var setState = function() {
      if(width >= 810){
        $('#nav-mobile').hide()
        // if(length > yPos && width > xPos){
        //   //use the fixed sidebar state
        //   $('#nav-unfixed').hide()
        //   $('#nav-fixed').show()
        // } else {
          //use the fluid sidebar state
          $('#nav-unfixed').show()
          $('#nav-fixed').hide()
        // }
      } else {
        $('#nav-unfixed').hide()
        $('#nav-fixed').hide()
        $('#nav-mobile').show()
      }
    }

    //handle browser refresh + initial dom state
    setState()

    $( window ).scroll(function (event) {
      length = $(window).scrollTop()
      setState()
    })

    $( window ).resize(function() {
      width = $(window).width()
      setState()
    })
  });
}
