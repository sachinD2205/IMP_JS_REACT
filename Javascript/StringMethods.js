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

// let SubjectName = "Marathi";

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

let fun2 = "Gava_La_gel nahi_ka";

console.log("checkStringEndWith", fun2.endsWith("gel nahi_ka"));

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

let findDuplicates = "bhava a aahes ka bara a aahes";

let onlyOnceFindDuplictes = findDuplicates.match(/aahes/);
let duplicate = findDuplicates.match(/aahes/g); //todo -- find globally means in all string

console.log("onlyOnceFindDuplictes", onlyOnceFindDuplictes);
console.log("duplicate", duplicate);

// note if not found return == null

// todo 9) =================================================================>

//! indexOf() - it match charter and word in string and return starting chartcter index

// let navatKyThevalay = "bhava kute chalay kute";

// console.log(navatKyThevalay.indexOf("ku"));

// todo 10) =================================================================>

//! lastIndexof() - it match charter and word in string and form end to string return starting chartcter index

let navatKyThevalay = "bhava kute chalay kute";

console.log(navatKyThevalay.lastIndexOf("k"));
