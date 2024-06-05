class ListElement {
    constructor (element) {
        this.listElements = element;
        this.listItems = ['Home','Land'];
    }

    static createElement (text) {
        const createLi = document.createElement('li');

        createLi.textContent = text;

        return createLi;
    }

    // Removes default elements from the listItems array
    update () {
        while (this.listElements.firstChild) {
            this.listElements.removeChild(this.listElements.firstChild)
        }

        for (let text of this.listItems) {
            this.listElements.appendChild(ListElement.createElement(text))
        }
    }

    add (text) {
        this.listItems.push(text)
        this.update();
    }

    remove (index) {
        this.listItems.splice(index, 1)
        this.update();
    }
}


const myList = document.getElementById('myList');
const List = new ListElement(myList);




