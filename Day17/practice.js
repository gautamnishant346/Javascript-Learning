// Without promise 
//function getData(){
//
//    setTimeout(()=>{
//        return "Data found";
//    },2000);
//}
//
//let result = getData();
//console.log(result);

// With Promise

//function getData(){
//
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           resolve("Data found");
//        },2000);
//    })
//}
//
//const response = getData()
////console.log(response);
//.then((response)=>{
//  console.log(response);
//})
//.catch((error)=>{
//   console.log(error);
//})


// callback version
//function login(callback){
//    setTimeout(()=>{
//        console.log("Login done");
//        callback();
//    },1000);
//}
//
//function getUser(callback){
//    setTimeout(()=>{
//      console.log("User data mila");
//      callback();
//    },1000);
//}
//
//function getPosts(callback){
//    setTimeout(()=>{
//      console.log("Posts mil gaye");
//      callback();
//    },1000);
//}
//
//function getComments(callback){
//    setTimeout(()=>{
//       console.log("Comments mil gaye");
//       callback();
//    },1000);
//}
//
//login(function(){
//    getUser(function(){
//     getPosts(function(){
//        getComments(function(){
//            
//        })
//     })
//    })
//})

//login(()=>{
//  getUser(()=>{
//    getPosts(()=>{
//        getComments(()=>{
//
//        });
//    })
//  });
//})


// Promise version

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Login Successfull");
          resolve();
        },1000);
    });
}

function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("User mil gaye");
           resolve();
        },1000);
    });
}

function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Posts mil gaye");
          resolve();
        },1000);
    });
}

function getComments(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Comments mil gaye");
            resolve();
        },1000);
    });
}

// Promise chain
login()
.then(getUser)      // iska mtlb jb login complete ho jaye to getUser chla do
.then(getPosts)
.then(getComments)
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Process finished");
})