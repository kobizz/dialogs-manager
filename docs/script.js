$(function () {
    var dialogsManager = new DialogsManager.Instance(),
        dialog = dialogsManager.createWidget( 'confirm', {
            headerMessage: 'Hello World',
            message: 'I\'m a pretty simple confirm dialog with tow buttons and a background overlay.',
            closeButton: true
        } );

    dialog.show();
} );