class Utils{
  // 设置大小
  setSize() {
    function setS() {
      const width = document.documentElement.clientWidth;
      const myWidth = 750 / 100;
      let fontSize = width / myWidth;
      fontSize = fontSize > 100 ? 100 : fontSize;
      document.documentElement.style.fontSize = fontSize + 'px';
    }

    setS();
    window.onresize = function () {
      setS();
    }
  }
}
const Util = new Utils();
export default Util;
