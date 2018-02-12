export function updateObjectInArray(array, targetIndex, payload) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return { ...payload };
  });
}
