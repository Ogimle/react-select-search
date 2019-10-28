export default function FindGroupIndex(options, id) {
  var foundIndex = null;
  options.forEach(function (option, i) {
    if ('groupId' in option && option.groupId === id) {
      foundIndex = i;
    }
  });
  return foundIndex;
}