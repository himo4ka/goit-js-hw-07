const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
for (const item of itemEl) {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
    }