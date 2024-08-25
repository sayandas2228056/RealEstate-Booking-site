const header=document.querySelector("header");
window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky",window.scrollY > 2000)
});
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value;

    if (query.length > 2) { // Start suggesting after 3 characters
        fetchAI(query).then(suggestions => {
            const dataList = document.getElementById('suggestions');
            dataList.innerHTML = ''; // Clear previous suggestions

            suggestions.forEach(suggestion => {
                let option = document.createElement('option');
                option.value = suggestion;
                dataList.appendChild(option);
            });
        });
    }
});

function fetchAI(query) {
    return new Promise(resolve => {
        // Simulating an AI suggestion fetch, replace with actual AI call
        const dummySuggestions = [
            query + ' building 1',
            query + ' building 2',
            query + ' building 3'
        ];

        setTimeout(() => resolve(dummySsuggestions), 300);
    });
}
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};
window.onscroll= () =>
{
    menu.classList.remove('bx-x');
    navbar.classList.toggle('open');
};