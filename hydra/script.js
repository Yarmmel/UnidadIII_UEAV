var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  })
   osc(10, 0.1, 0.8).rotate(0, 0.1).kaleid().color(-1, 1).out()
  
  // create functions to use with buttons
  function useCamera() {
    s0.initCam()
    src(s0).color(-1, Math.random()*2, 1).colorama().out()
  }
  
  function feedback() {
    src(o1)
      .layer(src(o0).mask(shape(4, 0.4, 0)))
      .scrollX([0.005, -0.005])
      .scrollY(0.005)
      .out(o1)
    
    render(o1)
  }
  s0.initVideo {<a data-flickr-embed="true" href="https://www.flickr.com/photos/202423719@N02/54394811081/in/dateposted/" title="slayc"><img src="https://live.staticflickr.com/31337/54394811081_276dbd28ee_z.jpg" width="576" height="576" alt="slayc"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>}
  src(0).modulate(osc(0.001,0.1, 10)).out()