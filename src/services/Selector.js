export default class Selector {
    constructor() {

    }

    isInsideElement(className) {
        const selectionObj = this.getSelectionObject();
        const startParentClassName = selectionObj.anchorNode.parentElement.className;
        const endParentClassName = selectionObj.focusNode.parentElement.className;
        return startParentClassName === className || endParentClassName === className;
    }

    getSelectionObject() {
        return window.getSelection ? 
                window.getSelection() : 
                document.selection.createRange();
    }

    getSelectionString() {
        return window.getSelection ? 
                window.getSelection().toString() : 
                document.selection.createRange().text;
    }

    getSelectionPosition(parentNode) {
        const selectionObj = this.getSelectionObject();
        const coor = selectionObj.getRangeAt(0).getBoundingClientRect();
        return [coor.right - parentNode.offsetLeft + window.pageXOffset, 
                coor.top - parentNode.offsetTop + window.pageYOffset];
    }
}