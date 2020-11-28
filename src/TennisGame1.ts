import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;
  private EQUAL: any = {
    0: 'Love-All',
    1: 'Fifteen-All',
    2: 'Thirty-All',
  };

  private DIFF_GREATER_THAN_OR_EQUAL_FOUR: any = [-2, -1, 1, Infinity];
  private TITLE_GREATER_THAN_OR_EQUAL_FOUR: any = ['Win for player2', 'Advantage player2', 'Advantage player1', 'Win for player1'];

  private ELSE = {
    0: 'Love',
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty'
  };

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    const scoreFirstCheck: string = this.checkEqualAndGetScore();
    const scoreSecondCheck: string = this.checkGreaterThanOrEqualFourAndGetScore();
    const scoreThirdCheck: string = this.checkElseAndGetScore();
    return scoreFirstCheck || scoreSecondCheck || scoreThirdCheck;
  }

  checkEqualAndGetScore() {
    if (this.m_score1 === this.m_score2) {
      return this.EQUAL[this.m_score1] || 'Deuce';
    }
    return '';
  }

  checkGreaterThanOrEqualFourAndGetScore() {
    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      let index: number = this.DIFF_GREATER_THAN_OR_EQUAL_FOUR.findIndex((diff: number) => {
        return this.m_score1 - this.m_score2 <= diff;
      });
      return this.TITLE_GREATER_THAN_OR_EQUAL_FOUR[index];
    }
    return '';
  }

  checkElseAndGetScore() {
    return this.ELSE[this.m_score1] + '-' + this.ELSE[this.m_score2];
  }
}
