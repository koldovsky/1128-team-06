function litres(time) {
  let litresPerHour = 0.5;
  return litresPerHour * time - ((litresPerHour * time) % 1);
}
