function toggle_visibility(id) {
       var e = document.getElementById(id);
       var button = document.getElementById(id+"button");
       if(e.style.display == 'block') {
          e.style.display = 'none';
          button.src='images/down.png';
       }
       else {
          e.style.display = 'block';
          button.src='images/up.png';
       }
    }
