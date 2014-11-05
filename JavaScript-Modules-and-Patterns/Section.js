var Factory = Factory || {};
(function(Factory){
    function Section(title){
        ListElement.call(this,title);
    }

    Section.extends(ListElement);

     Section.prototype._buildHtmlElement = function () {
        var header = document.createElement("h3");
        header.innerHTML = this._title;

        var itemDiv = document.createElement("div");
        itemDiv.appendChild(header);

        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = 'Add item...';
        input.name = 'itemName';

        var button = document.createElement("button");
        button.innerHTML = '+';
        button.name = 'addItemButton';

        var buttonDiv = document.createElement("div");
        buttonDiv.appendChild(input);
        buttonDiv.appendChild(button);

        var section = document.createElement("article");

        section.appendChild(itemDiv);
        section.appendChild(buttonDiv);

        this._htmlElement = section;
    };

    Factory.getSection = function(title){
        return new Section(title);
    };

})(Factory);
