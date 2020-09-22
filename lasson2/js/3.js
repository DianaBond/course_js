
function Constructor(n,m) {

    let object = [n];
    for(let i=0; i<n; i++)
    {
        object[i]=[m];
        for(let j=0; j<m; j++)
        {
            object[i][j]=Math.floor(Math.random()*(10-1)+1);
        }
    }
    this.matrix = object;
}
let n = prompt("Введите количество строк");
let m = prompt("Введите количество столбцов");


let newConstructor = new Constructor(n,m);
console.log(newConstructor.matrix);