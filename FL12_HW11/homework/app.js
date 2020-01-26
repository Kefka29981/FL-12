const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const generateTree = function(arr, rootHtmlElement) {
  arr.forEach(
  function createItem(item, index, array, ownerHtmlElement = null) {
    ownerHtmlElement = ownerHtmlElement || rootHtmlElement;
    const elem = ownerHtmlElement.appendChild(document.createElement('elem'));
    if(item.folder){
      elem.className = 'folder folded'
    }else {
      elem.className = 'file'
    }
    elem.innerHTML = `<i class="material-icons"></i>${item.title}`;
    if (item.folder) {
      elem.addEventListener('click', function(close) {
        close.target.classList.toggle('folded')
      });
      const div = ownerHtmlElement.appendChild(document.createElement('div'));
      if (Array.isArray(item.children)) {
        item.children.forEach(function(subItem){
          createItem(subItem, index, array, div)
        });
      } else {
        div.innerHTML = '<p><em>Folder is empty</em></p>';
      }
    }
  }
);
}

generateTree(structure, rootNode);
