var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({},object,{key:value});
  
}
 function updateObjectWithKeyAndValue(object,key2,value2) {
   
   object[key2] = value2;
   return object;
 }