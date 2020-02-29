function stringConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  console.log(args.join(separator));
}
stringConcat("","Ga","bri","e","la");




