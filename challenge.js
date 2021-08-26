function range(inicio, fim, skip=1) {
    if (fim == undefined) {
        fim = inicio
        inicio = 1
    }

    // opcao if 
  //  const n1 = fim === undefined ? 1 :  inicio
  //  const n2 = fim === undefined ? inicio : fim
  //

    let arr = []
    if (inicio < fim) {
        for (var i = inicio; i<=fim;i=i+skip) {
            arr.push(i)
        }
    } else {
        for (var i = inicio; i>=fim;i=i-skip) {
            arr.push(i)
        }

    }

    console.log(arr)
}

range(5)
range(6, 11)
range(10, 19,2)
range(6, 2)
range(8, -3, 4)