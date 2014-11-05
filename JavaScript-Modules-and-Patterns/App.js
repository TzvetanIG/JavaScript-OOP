function addElementInContainer(e) {
    var name = e.target.name;
    var parent,
        input,
        title;

    switch (name){
        case 'addItemButton':
            parent = e.target.parentNode.parentNode;
            input = parent.querySelector('input[type=text]');
            title = input.value;
            Factory.getItem(title).addToDOM(parent);
            break;
        case 'addSectionButton':
            parent = e.target.parentNode;
            input = parent.querySelector('input[name=sectionTitle]');
            title = input.value;
            Factory.getSection(title).addToDOM(parent);
            break;
    }

    input.value = '';
}

var container = Factory.getContainer('TODO List');

var body = document.body;
body.appendChild(container.getHtmlElement());
body.addEventListener('click', addElementInContainer);