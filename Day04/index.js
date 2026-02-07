// String
//const str1 = "Nishant ";  
// "" '' ma next line ma nhi likh skta sara ek hi line ma likna pdta ha
//const str2 = 'Aman ';
//const day = 18;
//const str3 = `Strike is coming on ${day}`;
// `` Most modern method isma hum next line ma bhi likh skta ha

//console.log(str3);

// `` -> backtick

// console.log(str.length);
// console.log(str[15]);

// String is immutable
// str[2] = "S";
// console.log(str);

// const str = `Hello Coder Army Coder`;
// console.log(str.toUpperCase());
//const a = str.toUpperCase();
//const b = str.toLowerCase();

//console.log(b);
// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('Cod'));

// const str = `Hello Coder Army Coder`;
// slice
//console.log(str.slice(2,7));  //7 wala include nhi hoga
//console.log(str.slice(3));
//console.log(str.slice(-5,-2));  // -2 include nhi hoga

// substring
// substring ma negative index ko mark down nhi kr skta
//console.log(str.substring(2,5));

// String concatination
//const a = "Rohit";
//const b = "Negi";
//const c = a+" "+b;
//console.log(c);

//console.log(24+"Rohit"+10); // 24 aur 10 ko string ma convert krka concat

// Replace substring
//const str = `Hello Coder Army Coder`;

//console.log(str.replaceAll('ode','iam'));

//const user = "  Rohit Negi ";
//console.log(user.trim());
//console.log(user.trimStart());
//console.log(user.trimEnd());
// starting aur last wala space trim krega sirf

// split string
//const names = "Rohit Mohit Suraj Rohan Anjali";

//console.log(names.split(","));  // , ka base pa split hoga
//console.log(names.split(" "));  // space ka base pa split hoga


// Date

//const now = new Date();

//console.log(now);     // utc ka according time dega
//console.log(now.toString());
//console.log(now.toISOString());
//console.log(now.toLocaleString());

// Local time chal rha ha
//console.log(now.getDay());
//console.log(now.getDate());
//console.log(now.getMonth());  //Month zero sa start hota ha
//console.log(now.getFullYear());
//console.log(now.getFullYear());
//console.log(now.getHours());
//console.log(now.getMinutes());
//console.log(now.getSeconds());
//console.log(now.getMilliseconds());

//days: Mon-Tue(1 based)
//Month: Jan-Feb(0 based)

// year month date hour minute second millisecond
//const now = new Date(2026,0,23,15,25,16,125);
//console.log(now.toString());

//Timestamp: UTC time nikalta ha
const now = Date.now(); 
 const dates = new Date(now);
  //console.log(dates.toString());

console.log(dates);
console.log(now);
//1769177404003: Timestamp
// Millisecond ma nikalta ha issa