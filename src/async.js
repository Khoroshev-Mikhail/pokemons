const f1 = () => new Promise(r => setTimeout(r, 1000, "a"));
const f2 = (x) => new Promise(r => setTimeout(r, 1000, x + "b"));
const f3 = () => new Promise((_, r) => setTimeout(r, 1000, "err"));


// f3()
//   .then(() => {
//     return f1();
//   })
//   .then(x_ => {
//     x = x_
//     return f2(x_);
//   })
//   .then(y => {
//     console.log(x, y)
//   })
//   .catch(()=>{
//       console.log('err')
//   })

// try {
//   f3()
//   const x = await f1()
//   const y = await f2(x)
  
//   console.log(x, y);
// } catch(e) {
//   console.log('err')
//   console.log(e)
// }
async function main() {
  try {
    return await f3()
  } catch {
    
    console.log("----");
    return '111'
  }
  // return await f3()
}

// const promises = [];
// for (const url of urls) {
//   const promise = fetch(url);
//   promises.push(promise);
// }



const arr = await Promise.all(urls.map(fetch));


main().then(
  (x) => console.log(1, x),
  (x) => console.log(2, x),
)
