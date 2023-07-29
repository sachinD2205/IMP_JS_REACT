//! JavaScript String Methods
// length
// toLowerCase()
// toUpperCase()
// includes()
// startsWith()
// endsWith()
// search()
// match()
// indexOf()
// lastIndexOf()
// replace()
// trim()
// charAt()
// charCodeAt()
// fromCharCodeAt()
// concat()
// split()
// repeat()
// slice()
// subString()
// toString()
// valueOf();

// todo 1) ================================================================>

// ! 1)  Length  - Method Property  -- it return length of String

// let StudentName = "Pooja_Desai";

// console.log("StringLength", StudentName.length);

//  todo  2) =================================================================>

//!  toLowerCase()  --- it convert string to lowerCase

// let SubjectName = "Marathi";x

// console.log("SubjectName", SubjectName.toLowerCase());

// todo 3)  =================================================================>

//!  toLowerCase()  --- it convert string to UpperCase

// let Hobby = "32432_hlloBhava";

// console.log("Hobby", Hobby.toUpperCase());

// todo 4) =================================================================>

//! includes() - it checks current passed argument to includes method is exist or not in string if exist it return true other wise false

// let Name = "Pooja_Desai";

// console.log("IncludesMethoForString", Name.toLowerCase().includes("od"));

// todo 5) =================================================================>

//! startsWith(); --- it getParamter and it and Check Starting Form String passed paramter match with string from Starting it return true else fale --- note ... it stricly typed it checks casing also

// let fun = "bhava_aahes_ki_nhis_jita";

// console.log("StartsWith_Check", fun.startsWith("bhava_aahes_ki"));

// todo 6) =================================================================>

//! EndsWith(); -- it getparamter and it checks fromLast charter --

// let fun2 = "Gava_La_gel nahi_ka";

// console.log("checkStringEndWith", fun2.endsWith("gel nahi_ka"));

// todo 7) =================================================================>

//! Search() -- we can pass parameter and it find the chart or word in string and return is start index if not found it return -1 ... n
// ! note : if not found return -1 and if return start index
// another note index start from 0 and length start from1
// here index return start matching word charchter

// let nameSpadale = "bhava spadatay k";

// console.log("spadalela index", nameSpadale.search("ka"));
// console.log("spadalela index", nameSpadale.search(" k"));
// console.log("spadalela length", nameSpadale.length);

// todo 8) =================================================================>

//! Match() -- in here we can pass pattern it will find in all string and return array

// let findDuplicates = "bhava a aahes ka bara a aahes";

// let onlyOnceFindDuplictes = findDuplicates.match(/aahes/);
// let duplicate = findDuplicates.match(/aahes/g); //todo -- find globally means in all string

// console.log("onlyOnceFindDuplictes", onlyOnceFindDuplictes);
// console.log("duplicate", duplicate);

// note if not found return == null

// todo 9) =================================================================>

//! indexOf() - it match charter and word in string and return starting chartcter index

// let navatKyThevalay = "bhava kute chalay kute";

// console.log(navatKyThevalay.indexOf("ku"));

// todo 10) =================================================================>

//! lastIndexof() - it match charter and word in string and form end to string return starting chartcter index

// let navatKyThevalay = "bhava kute chalay kute";

// console.log(navatKyThevalay.lastIndexOf("k"));


//todo 11) ===================================================================>

//! replace() -  we can pass to arguments in this method first what you want replace where you want
//! it create new string with replaycing word not modify original string
// ! if want replace in all words or character matching in string then we need to use regular expression


// let HarrayBhai = " Harray Bhai is js Bhai Bhai teacher";


// console.log(HarrayBhai);

// let test = HarrayBhai.replace("Bhai", "Don");




// console.log("dsf", test);

// //! if want replace in all word then must be use global expression

// let test2 = HarrayBhai.replace(/Bhai/g, "Don");
// console.log("don", test2);




//todo 12) ===================================================================>

//! trim() -- it remove the white spaces from start and end --
//! not it does not modify original string

// let harrayBhaiTrim = "    Harray Bhai is Good  ";

// console.log("withoutTrimStringLegth", harrayBhaiTrim.length);
// // here we removed white space of string
// console.log("withTrimLegthOfHarr", harrayBhaiTrim.trim().length);



//todo 13)=======================================================================>

//! charAt();  ----- we can pass index and it return chart form that index


// let haapyBhava = "happy aahe ka bhava tu";


// console.log("3 postion charcter", haapyBhava.charAt(3));  //! p
// //! if not found does not return anything
// console.log("34 postion charcter", haapyBhava.charAt(34));  //! p


// todo 14) ================================================================>


// ! charCodeAt() ; ----- we can pass index and it return ascii code unicode value of that character

// let pooja_Char = "dasjfdsf .jdslf";

// console.log("charCodeAt",pooja_Char.charCodeAt(1))




//todo 15)    ==========================================================>

//! formCharCode();  -- using this we can pass unicode value and it return charAt

// console.log(String.fromCharCode(97));



// todo 16) ========================================================>

//! concat() - in this method method we can pass mulitiple varibles of string and it return concated new method


// let str1 = "hello";
// let str2 = "jay";
// let str3 = "bhava aahes ka bara";

// let str4 = str1.concat(" ",str2," ", str3," ",str1);

// console.log("str4", str4);




// todo 17) ===============================================>

//! split() -- we can pass argument by using this it create new splited words array 4
//! note if we want all string char in array split like this ("") -- we get newArray
// let splitString = "java script is,funny language";

// let newSplitedArray = splitString.split(",");
// console.log(newSplitedArray);



// todo 18) =======================================================>

//! repeat() -- we pass number argument how many times want to repeat string


// let splitString = "java script isfunny language  ";

// let repeatedStrig = splitString.repeat(5);
// console.log(repeatedStrig);



// todo 19) ==============================================================>

//! slice()   --- we can pass argment start and end index it is optional and return new string if not passed  anything it will return new copy of array as it is


// let sliceString = "how are you";

// let newSlicedString = sliceString.slice(4, 7);
// console.log(newSlicedString);


// todo 20) ==============================================================>
//! substr() -- it is simllar to slice method diffrence is second argment is counted charcter from 1st parameter

//! second argument not counted as index we count as normal


// let sliceString = "how are you";

// let newSlicedString = sliceString.substr(2, 7);
// console.log(newSlicedString);


// todo 21) ==============================================================>
//! substring() -- it is similar to 

//! second argument not counted as index we count as normal


let sliceString = "howareyou";

let newSlicedString = sliceString.substring(-2);
let newSlice = sliceString.slice(-2);
console.log(newSlicedString, newSlice);


