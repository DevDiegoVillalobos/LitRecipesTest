document.addEventListener('DOMContentLoaded', function() {
    // nav menu
    const menus = document.querySelectorAll('.side-menu');
    console.log("ui----");
    console.log(menus);
    console.log(M);
    M.Sidenav.init(menus, {edge: 'right'});
    console.log(M);
    // add recipe form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
  });