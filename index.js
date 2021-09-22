const superbowlWin = teamRecord => {
  const query = teamRecord.find(item =>  item.result === "W");
  return query === undefined ? undefined : query.year;
};