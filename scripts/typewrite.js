window.onload = function () {
    typeWriter('typewrite1', text1, 60, function () {
      typeWriter('typewrite2', text2, 60);
    });
  };

  const text1 = "Maximilian";
  const text2 = " Huetter";

  function typeWriter(elementId, text, speed, callback) {
    const element = document.getElementById(elementId);
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        if (callback) {
          callback(); 
        }
      }
    }

    type();
  }