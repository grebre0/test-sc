export default class Highlighter {
    constructor(node) {
        this.backupNode = node.cloneNode(true);
        this.defaultNode = node.cloneNode(true);
    }

    _getAllTextNodes(node) {
        const walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        let textNode, 
            result = [];
        while(textNode = walk.nextNode()) result.push(textNode);
        return result;
    }

    _getStringPositions(string, text, isWordBreacks) {
        let regex, 
            indexes = [],
            result;

        if(isWordBreacks) {
            regex = new RegExp('\\b' + string + '\\b', 'gi');
        } else {
            regex = new RegExp(string, 'gi');
        }

        while ( (result = regex.exec(text)) ) {
            indexes.push(result.index);
        }
        return indexes;
    }

    _createRangesOf(strings, node, isWordBreacks) {
        const textNodes = this._getAllTextNodes(node);
        let stringsArr = [];
        let ranges = [];

        if(typeof strings === 'object') stringsArr = strings;
        if(typeof strings === 'string') stringsArr = [strings];

        stringsArr.forEach(string => {
            textNodes.forEach(node => {
                const indexes = this._getStringPositions(string, node.nodeValue, isWordBreacks);
                indexes.forEach(index => {
                    const range = document.createRange();
                    range.setStart(node, index);
                    range.setEnd(node, index + string.length);
                    ranges.push(range);
                });
            });
        });
        return ranges;
    }

    _highlightRanges(ranges, node, className) {
        ranges.forEach(range => {
            const span = document.createElement('span');
            span.className = className;
            range.surroundContents(span);
        });
        return node.innerHTML;
    }

    highlight(strings, className) {
        const node = this.defaultNode.cloneNode(true);
        const ranges = this._createRangesOf(strings, node, false)
        return this._highlightRanges(ranges, node, className);
    }

    highlightHard(strings, className) {
        const node = this.defaultNode;
        const ranges = this._createRangesOf(strings, node, true)
        return this._highlightRanges(ranges, node, className);
    }

    reset() {
        return this.defaultNode.innerHTML;
    }

    resetHard() {
        this.defaultNode = this.backupNode.cloneNode(true);
        return this.defaultNode.innerHTML;
    }
}
