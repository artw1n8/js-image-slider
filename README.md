# Simple Image Slider  

A simple image slider written in JavaScript for a website.  

It consists of a function that takes an object with the following parameters:  
- `container` – the selector of the main slider container, e.g., `'.slider'`.  
- `slide` – the selector of individual slides, e.g., `'.slide'`.  
- `nextArrow` – the selector for the next button, e.g., `'.next'`.  
- `prevArrow` – the selector for the previous button, e.g., `'.prev'`.  
- `totalCounter` – the selector for the total slides counter, e.g., `'.total'`.  
- `currentCounter` – the selector for the current slide counter, e.g., `'.current'`.  
- `wrapper` – the selector for the wrapper around slides, e.g., `'.slider-wrapper'`.  
- `field` – the selector for the field containing all slides, e.g., `'.slider-field'`.  

The slider file can be used as a module. To use it, import it in the main file like this:  

```javascript
import slider from './modules/slider';
```

**Attention:** Since modules are not supported directly in the browser, you need to build the project with WebPack.  
