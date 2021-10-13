const list = document.querySelectorAll('#categories .item');

 console.log(`Number of categories: ${list.length}`);

list.forEach((listItem) => {
    const title = listItem.querySelector('h2').textContent;
    console.log(`Category: ${title}`);

    const count = listItem.querySelectorAll('li').length;
    console.log(`Elements: ${count}`)
});








