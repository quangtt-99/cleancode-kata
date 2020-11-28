import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;
  private TITLE_EQUAL: any = {
    0: 'Love-All',
    1: 'Fifteen-All',
    2: 'Thirty-All',
  };

  private DIFF_SCORE: any = [-2, -1, 1, Infinity];
  private TITLE_FROM_DEUCE: any = ['Win for player2', 'Advantage player2', 'Advantage player1', 'Win for player1'];

  private TITLE = {
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
    if (playerName === 'player1') this.player1Score += 1;
    else this.player2Score += 1;
  }

  getScore(): string {
    if (this.isEqual()) {
      return this.getScoreIfEqual();
    }
    if (this.isAfterDeuce()) {
      return this.getScoreAfterDeuce();
    }
    return this.getScoreBeforeDeuce();
  }

  isEqual(): boolean {
    return this.player1Score == this.player2Score;
  }

  isAfterDeuce(): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  getScoreIfEqual(): string {
    return this.TITLE_EQUAL[this.player1Score] || 'Deuce';
  }

  getScoreAfterDeuce() {
    const index: number = this.DIFF_SCORE.findIndex((diff: number) => {
      return this.player1Score - this.player2Score <= diff;
    });
    return this.TITLE_FROM_DEUCE[index];
  }

  getScoreBeforeDeuce() {
    return this.TITLE[this.player1Score] + '-' + this.TITLE[this.player2Score];
  }
}
