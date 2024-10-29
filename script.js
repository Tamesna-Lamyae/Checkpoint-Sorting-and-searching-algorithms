function performInsertionSort() {
    const input = document.getElementById('arrayInput').value;
    const arr = input.split(',').map(Number);

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Déplacer les éléments du tableau qui sont plus grands que key
        // d'une position en avant pour faire de la place à l'élément key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    document.getElementById('sortedArray').textContent = "Tableau trié : " + arr.join(', ');
}
