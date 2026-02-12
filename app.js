pic = document.querySelector('.picasso');
width = pic.firstChild.getAttribute('width');
height = pic.firstChild.getAttribute('height');

resize = (w, h) => {
    pic.parentElement.parentElement.setAttribute('style', `width: ${w + (134/30)}px; height: ${h + 47.75}px`);
    pic.firstChild.setAttribute('width', w+'px');
    pic.firstChild.setAttribute('height', h+'px');

    width = w;
    height = h;
};

ref = (url, dx = 0, dy = 0, dWidth = width, dHeight = height) => {
    const c = pic.firstChild.getContext('2d');

    const img = new Image();
    img.src = url;

    img.onload = () => {
        c.drawImage(img, dx, dy, dWidth, dHeight);
    }
}
