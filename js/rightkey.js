//绑定页面相关事件
(function(a) {
    a.extend({
      mouseMoveShow: function(b) {
        var d = 0,
                c = 0,
                h = 0,
                k = 0,
                e = 0,
                f = 0;
        a(window).mousemove(function(g) {
          d = a(window).width();
          c = a(window).height();
          h = g.clientX;
          k = g.clientY;
          e = g.pageX;
          f = g.pageY;
          h + a(b).width() >= d && (e = e - a(b).width() - 5);
          k + a(b).height() >= c && (f = f - a(b).height() - 5);
          a("html").on({
            contextmenu: function(c) {
              3 == c.which && a(b).css({
                left: e,
                top: f
              }).show()
            },
            click: function() {
              a(b).hide()
            }
          })
        })
      },
      //禁用右键菜单
      disabledContextMenu: function() {
        window.oncontextmenu = function() {
          return !1
        }
      }
    })
  })(jQuery);
  
  function getSelect() {
    "" == (window.getSelection ? window.getSelection() : document.selection.createRange().text) ? layer.msg("请选择需要复制的内容！") : document.execCommand("Copy")
  }
  function  toRefresh(){
    window.location.reload()
  }
  $(function() {
    for (var a = navigator.userAgent, b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, c = 0; c < b.length; c++) if (0 < a.indexOf(b[c])) {
      d = !1;
      break
    }
    d && ($.mouseMoveShow(".usercm"), $.disabledContextMenu())
  });
  var duoMaomao = function() {
    var maomao = $('#maomao');
    maomao.css('bottom', randomNum(5, 80) + 'vh');
  }