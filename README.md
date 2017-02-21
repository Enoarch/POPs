# POPs
A short Jquery plug-in to create custom popup

## Installing POPs

Download latest sources codes just on the project repository (POPs.css and POPs.js)

## Usage

To create a Popup, it's easy !

```js
 $('div').myPOP(
 {
   "title":"Hello this is a popup",
   "eventObj":$("#launcher"),
   "theme":"RTE",                    
   "width":"600px",                    
   "height":"300px"
 });
```
note that ```js $("#launcher")``` is parameter which is necessary. It's correspond to the link which allow you to show Popup.

## Parameters
For now, just 5 parameters exist :

 > title : title of the popup  
 > eventObj : elements which allows to show Popup  
 > theme : CSS Theme  
           Currently, three Graphic themes are available : lagoon, vador and RTE  
 > width : width of the popup (default value is 600px, note that all ordinary Units of measurement are available)  
 > height : height of the popup (There is no défault value)  
