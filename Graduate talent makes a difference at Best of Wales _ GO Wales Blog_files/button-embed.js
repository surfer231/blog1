var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var buttonEmbed = (function() {
  var baseUrl = "//web.archive.org/web/20150619010101/http://www.reddit.com"
  var apiUrl = "//web.archive.org/web/20150619010101/http://buttons.reddit.com"
  var logo = $q('a.logo')
  var up = $q('a.up')
  var down = $q('a.down')
  var submission = $q('a.submission-details')
  var query = getQueryParams()

  function $q(s) {
    return document.querySelector(s)
  }

  function getQueryParams() {
    var params = {}
    var segments = window.location.search.substring(1).split('&')

    for (var i=0; i < segments.length; i++) {
      var pair = segments[i].split('=')
      params[pair[0]] = decodeURIComponent(pair[1])
    }

    return params
  }

  function pointLabel(x) {
    x = parseInt(x, 10)
    return x + " <span class='points-label'>point" + (x !== 1 ? "s" : "") + "</span>"
  }

  function submitUrl() {
    var url = baseUrl

    if (query.sr) {
      url += '/r/' + encodeURIComponent(query.sr)
    }

    url += '/submit?url=' + encodeURIComponent(query.url)

    if (query.title) {
      url += '&title=' + encodeURIComponent(query.title)
    }

    return url
  }

  function parseSubmission(response) {
    if (response.data && response.data.children.length > 0) {
      var child = response.data.children[0];

      submission.href = baseUrl + child.data.permalink;
      submission.innerHTML = pointLabel(child.data.score);
      submission.className += ' has-points';
      logo.href = up.href = down.href = submission.href;
    } else {
      submission.innerHTML = 'submit';
    }
  }

  function loadSubmission() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = apiUrl + '/button_info.json?jsonp=buttonEmbed.parseSubmission&url=' + encodeURIComponent(query.url);
    document.body.appendChild(script);
  }

  function safeColor(colorString) {
    var match = colorString.match(/([A-F0-9]{6}|[A-F0-9]{3})/i)
    if (match) {
      return '#' + match[0]
    }
    return null
  }

  function applyParams() {
    if (query.bgcolor) {
      document.body.style.backgroundColor = safeColor(query.bgcolor)
    }

    if (query.bordercolor) {
      $q('.wrap').style.borderColor = safeColor(query.bordercolor)
    }

    var links = document.getElementsByTagName('a')
    for (var i=0; i < links.length; i++) {
      links[i].target = query.newwindow ? "_blank" : "_top"
    }
  }

  function init() {
    submission.href = logo.href = up.href = down.href = submitUrl()
    applyParams()
    loadSubmission()
  }

  return {
    init: init,
    parseSubmission: parseSubmission
  }
}())

buttonEmbed.init()


}
/*
     FILE ARCHIVED ON 01:01:01 Jun 19, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:55:01 Mar 26, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.189
  RedisCDXSource: 0.813
  load_resource: 213.949
  esindex: 0.043
  captures_list: 4041.258
  LoadShardBlock: 438.563 (4)
  PetaboxLoader3.resolve: 224.16 (2)
  PetaboxLoader3.datanode: 318.674 (5)
  exclusion.robots.policy: 0.178
  CDXLines.iter: 238.655 (4)
*/