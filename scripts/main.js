const logoSwap = () => {
    let myImage = document.querySelector('img');
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/xbox-logo-1.png') {
         myImage.setAttribute('src', 'images/xbox-logo-2.png');
/*  } else if (mySrc === 'images/xbox-logo-2.png') {
         myImage.setAttribute('src', 'images/xbox-logo-3.png');*/
    } else {
        myImage.setAttribute('src', 'images/xbox-logo-1.png');
    }
}