let getToast = () => {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          resolve('Your toast is ready');
      },2000)
  })
}

let getCoffee = () => {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          resolve('Your coffee is ready');
      },3000)
  })
}

let breakfast = async function() {
  let toast = await getToast();
  let coffee = await getCoffee();

  let [myToast,myCofee] = await Promise.all([toast,coffee]);
  console.log(myToast,myCofee);
}

breakfast()



    function userInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((userInfo) =>userInfo.json())
          .then((userData) => {
            resolve(userData);
          })
          .catch((error) => {
            reject(error);
          });
      }, 3000);
    });
  }
  
