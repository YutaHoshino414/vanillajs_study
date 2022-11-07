function getElement(){
    let child = document.createElement('li');
    child.append('洋食屋');

    let parentnode = document.getElementById('shopinfo');
    let childnode = document.getElementById('menu02');
    parentnode.insertBefore(child, childnode);
}