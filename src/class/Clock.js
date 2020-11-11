class Clock {
  constructor() {
    this.now = new Date();
  }

  getSecondAngle() {
    return this.now.getSeconds() * 6;
  }

  getMinuteAngle() {
    return this.now.getMinutes() * 6;
  }

  getHourAngle() {
    return this.now.getHours() * 30 + (this.getMinuteAngle() / 12);
  }
}

export default Clock;
