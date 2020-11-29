import { TennisGame } from './TennisGame';


export class TennisGame3 implements TennisGame {
  private point2: number = 0;
  private point1: number = 0;
  private person1Name: string;
  private person2Name: string;

  private TITLES = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  constructor(person1Name: string, person2Name: string) {
    this.person1Name = person1Name;
    this.person2Name = person2Name;
  }

  getScore(): string {
    if (this.isBeforeDeuce()) {
      return this.getScoreBeforeDeuce();
    }
    if (this.isDeuce()) {
      return this.getScoreDeuce();
    }
    if (this.isAdvantage()) {
      return this.getScoreAdvantage();
    }
    return this.getScoreKnockout();
  }

  isBeforeDeuce(): boolean {
    return Math.max(this.point1, this.point2) < 4 && !((this.point1 + this.point2) === 6);
  }

  isDeuce(): boolean {
    return this.point1 == this.point2;
  }

  isAdvantage(): boolean {
    return (((this.point1 - this.point2) * (this.point1 - this.point2)) === 1);
  }

  getScoreBeforeDeuce(): string {
    if (this.point1 == this.point2) {
      return this.TITLES[this.point1] + '-All';
    }
    return this.TITLES[this.point1] + '-' + this.TITLES[this.point2];
  }

  getScoreDeuce(): string {
    return 'Deuce';
  }

  getScoreAdvantage(): string {
    return 'Advantage ' + (this.point1 > this.point2 ? this.person1Name : this.person2Name);
  }

  getScoreKnockout(): string {
    return 'Win for ' + (this.point1 > this.point2 ? this.person1Name : this.person2Name);
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.point1 += 1;
    else
      this.point2 += 1;
  }
}
