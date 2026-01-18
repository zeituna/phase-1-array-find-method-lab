// code your solution here
function superbowlWin(record) {
  const win = record.find(item => item.result === "W");
  return win ? win.year : undefined;
}
