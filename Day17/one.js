// callback

//function login(callback){
//    setTimeout(()=>{
//        console.log("Login done");
//        callback()
//    },1000);
//}
//function getUser(callback){
//    setTimeout(()=>{
//      console.log("User data mila");
//      callback();
//    },1000);
//}
//function getPosts(callback){
//    setTimeout(()=>{
//      console.log("Posts mila");
//      callback();
//    },1000);
//}
//function getComments(){
//    setTimeout(()=>{
//      console.log("Comments mila");
//    },1000);
//}
//
//login(()=>{
//    getUser(()=>{
//        getPosts(()=>{
//            getComments();
//        })
//    })
//});


// Promise

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Login Done");
          resolve();
        },1000);
    });
}
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("User data mila");
          resolve();
        },1000);
    });
}
function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("Posts mila");
           resolve();
        },1000);
    });
}
function getComments(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Comments mila");
          resolve();
        },1000);
    });
}

login()
.then(getUser)
.then(getPosts)
.then(getComments)
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("Process Finished");
})