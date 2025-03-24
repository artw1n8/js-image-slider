function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper,field}) {
    const pictures = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const countPictures = pictures.length;
    const prevPointer = document.querySelector(prevArrow);
    const nextPointer = document.querySelector(nextArrow); 
    const totalNumber = document.querySelector(totalCounter);
    const currentNumber = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const width = window.getComputedStyle(slidesWrapper).width;
    const slidesField = document.querySelector(field);
    
    let currentCount = 1;
    let offset = 0;
    
    if(countPictures>9){
        totalNumber.textContent = countPictures;
        currentNumber.textContent = `${currentCount}`
    }else{
        totalNumber.textContent = '0' + countPictures;
        currentNumber.textContent = `0${currentCount }`
    }
    
    slidesField.style.width = 100 * pictures.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    pictures.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    const dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`;
    slider.append(indicators);

    for(let i =0; i< pictures.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;`;
        if(i == 0){
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function changeCurrentNumber () {
        if(countPictures < 10){
            currentNumber.textContent = `0${currentCount}`
        }else{
            currentNumber.textContent = `${currentCount}`
        }
    }

    function changeDot() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[currentCount -1].style.opacity = 1;
    }

    function deleteNotDigits(string){
        const res = string.replace(/\D/g, '');
        return +res;
    }

    nextPointer.addEventListener('click', () => {

        if(offset == deleteNotDigits(width) * (pictures.length - 1)){
            offset = 0;
        }else{
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(currentCount == countPictures){
            currentCount = 1;
        }else{
            currentCount++;
        }

        changeCurrentNumber();
        changeDot();
    });
    prevPointer.addEventListener('click', () => {

        if(offset == 0){
            offset = deleteNotDigits(width) * (pictures.length - 1);
        }else{
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(currentCount == 1){
            currentCount = countPictures;
        }else{
            currentCount--;
        }

        changeCurrentNumber();
        changeDot();
    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            
            currentCount = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            changeCurrentNumber();
            changeDot();
        })
    })
}

export default slider;
