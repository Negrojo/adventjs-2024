function createFrame(names) {
  const maxLength = Math.max(...names.map(na => na.length));
  const bar = "*".repeat(maxLength+4)
  const list = names.map(name => "* " + name.padEnd(maxLength) + " *");
  return [bar, ...list, bar].join("\n");
}
