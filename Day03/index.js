// Number
//let a = 10;
//let b = 345.6821;
// let c = b.toFixed(1)
// console.log(c);
// toFixed function decimal ka bad sirf 2 digit hi lega
// toFixed string return krta ha

//console.log(b.toPrecision(4));
// toPrecision btata ha ki kitni values lega 

//console.log(b.toString());
// toString sa Number ko String ma convert kr skta ha

// let a = 20;   normal method of number creation

// we are not using this method (only in some rare cases)
//let a = new Number(20);  
//let b = a;
// new keyword use krta ha to kisi ko bhi as an object leta ha.
// object ka comparison reference ka base pa hote ha agar ek hi ko point krra ha
 // to true
//console.log(a==b);

// Non Primitive: Reference base pa compare
// Primitive: Copy by value (mtlb value ka base pa compare hota ha)

//console.log(Math.abs(-4));
//console.log(Math.PI);
//console.log(Math.LN10);
//console.log(Math.SQRT2);
//console.log(Math.ceil(2.3));
//console.log(Math.floor(2.3));
//console.log(Math.max(20,11,3421,12));
//console.log(Math.min(20,11,3421,12));


//console.log(Math.random());
// Math.random() random value generate krta ha 
// [0,1]: it will generate value between 0 and 1, where 0 is included but
   // 1 is not included

   //Sattebazi app (0-9)
  //console.log(Math.floor(Math.random()*10)+1);

  // (0-6)
  //console.log(Math.floor(Math.random()*6)+1);

  // Math.floor(Math.random()*totalNumberofoutcome)+shift

  // (15-25)
  //console.log(Math.floor(Math.random()*11)+15);

  // Math.floor(Math.random()*(max-min+1))+min

  // (28-37)
  //console.log(Math.floor(Math.random()*10)+28);

  //OTP Generate: 4 Digit: 1000-9999
  //console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

  // Math.random seed ko sidha time ka basis pa utha leta ha 
  // Math.random bhi seed value time ko hi leta ha usiko manipulate krta ha
  // jo seed value ha time ka basis pa usko hackers guess kr skta ha kyuki
    // ho skta ha uska device pr bhi same hi time chl rha ho

    // Crypto library seed ko random kr deti ha
    // Crypto library seed ko kai trah sa random kr skti ha jaise
    // mouse coordinates,current RAM used.

    //OTP Generate using Math.random
    console.log(Math.floor(Math.random()*(9999-1000+1))+1000);