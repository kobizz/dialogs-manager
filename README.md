# Dialogs Manager
Dialogs Manager for websites. based on jQuery-UI

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

## Getting started

---
Since this plugin based on [jQuery](http://jquery.com/) and using the [jQuery UI Position](https://jqueryui.com/position/) utility, you must to call them first in your html page:
```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
```

__Please note:__ Since the jQuery UI Library is too large, and you need only the position feature, it's highly recommended to download it through the official [Download Builder](http://jqueryui.com/download/) in jQuery UI site. Just choose only the _position_ feature and download it to your local folder.

After youv'e included all the required scripts, include the Dialogs Manager core file in your page:
```html
<script src="dialogs-manager.min.js"></script>
```
## Usage

---

Let's assume that we have a simple button:

```html
<button id="click-me">Click Me</button>
```

We'll write the following script:

```javascript
jQuery(function ($) {

	var dialogManager = new DialogsManager.Instance(); // First, create instance of DialogsManager. Usually, you don't need more than one instance per application

	var confirmWidget = dialogManager.createWidget('confirm'); // Now, create a widget with the type you want to use

	confirmWidget.setMessage('Hello, my name is world!'); // Now, set message that will be shown in the dialog

	confirmWidget.onConfirm = function () { // Set what happens when the user clicked on the 'confirm' button

		console.log('I Confirmed!');
	};

	confirmWidget.onCancel = function () { // Set what happens when the user clicked on the 'cancel' button

		console.log('I Canceled!');
	};

	$('#click-me').on('click', function () { // Now, bind event to our button
		confirmWidget.show(); // Clicking this button will show the dialog
	});
});
```

Additionally, you can write the whole creation of the widget at once, as the following:

```javascript
jQuery(function ($) {

	var dialogManager = new DialogsManager.Instance();

	var confirmWidget = dialogManager.createWidget('confirm', {
	    message: 'Hello, my name is world!',
        onConfirm: function () {

		    console.log('I Confirmed!');
	    },
        onCancel: function () {

		    console.log('I Canceled!');
	    }
	});

	$('#click-me').on('click', function () {
		confirmWidget.show();
	});
});
```