# POPs
A short Jquery plug-in to create custom popup

## Installing POPs

On the one hand, to use POPs, you need installing js and CSS for jquery and jqueryUI (they are already in SRC).
On the other hand, dowload POPs js and CSS file. 

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

Currently, three Graphic themes are available : lagoon, vador and RTE
