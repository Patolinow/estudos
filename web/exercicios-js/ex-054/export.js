function getFlag(argv) {
  let objectWithAllVars = {}
  
   argv.forEach((element, index, argv) => {
    if (element.includes("--")) {
      objectWithAllVars = Object.assign(objectWithAllVars, {[element.slice(2)]: argv[index + 1]})
    }
   });

   return `Olá ${objectWithAllVars.fullName} ${objectWithAllVars.greetingn}`
 }

 module.exports = { getFlag }