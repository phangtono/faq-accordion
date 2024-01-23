const listItems = document.querySelectorAll('#mylist li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        listItems.forEach(li => {
            li.classList.remove('checked');
        });

        this.classList.add('checked');
    });
});