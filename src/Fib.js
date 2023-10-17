
import React from 'react'
//0 1	1	2	3	5	8	13
// fib(n) = fib(n - 1) + fib(n-2)

function Fib() {


  const fib = function (n) {
    let a = 0
    let b = 1

    for (let i = 0; i <= n - 1; i++) {
      let c = a + b
      a = b
      b = c
    }
    console.log(a);


  }

  console.log('dupa')
  ///////////////

  function openOrSenior(data) {
    const newData = data.map((innerArray) => {
      if (innerArray[0] >= 55 && innerArray[1] > 7) { return 'Senior' } else { return "Open" }
    })
    return newData
  }

  console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

  return (
    <div>Fib</div>
  )
}

export default Fib
