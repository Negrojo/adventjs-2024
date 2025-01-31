function organizeInventory(inventory) {
  const result = {};
  inventory.forEach(item => {
 result[item.category] ??= {};
result[item.category][item.name] = (result[item.category][item.name] ?? 0) + item.quantity;
  });
  return result;
}
