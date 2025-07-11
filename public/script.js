document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const res = await fetch('/api/items');
        const data = await res.json();

        const output = document.getElementById('output');
        output.innerHTML = ''; // limpia antes

        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price}</p>`;
            output.appendChild(div);
        });
    } catch (err) {
        console.error('Error al cargar los datos:', err);
    }
});