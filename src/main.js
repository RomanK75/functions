export default function healthStatus(unit) {
  if (unit.health > 50) {
    return 'healthy';
  } if (unit.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
