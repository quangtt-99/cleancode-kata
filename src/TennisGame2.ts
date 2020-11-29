import { TennisGame } from './TennisGame';

export class TennisGame2 implements TennisGame {
  player1Point: number = 0;
  player2Point: number = 0;

  player1Res: string = '';
  player2Res: string = '';

  private score: string = '';

  private player1Name: string;
  private player2Name: string;

  private TITLE_EQUAL: any = {
    0: 'Love-All',
    1: 'Fifteen-All',
    2: 'Thirty-All',
  };

  private TITLES = {
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty',
  };

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  isEqualNBeforeDeuce(): boolean {
    return this.player1Point === this.player2Point && this.player1Point < 4;
  }

  isDeuce(): boolean {
    return this.player1Point === this.player2Point && this.player1Point >= 3;
  }

  isOnlyPlayer1(): boolean {
    return this.player1Point > 0 && this.player2Point === 0;
  }

  isOnlyPlayer2(): boolean {
    return this.player2Point > 0 && this.player1Point === 0;
  }

  isPlayer1BetterNBeforeDeuce(): boolean {
    return this.player1Point > this.player2Point && this.player1Point < 4;
  }

  isPlayer2BetterNBeforeDeuce(): boolean {
    return this.player2Point > this.player1Point && this.player2Point < 4;
  }

  isPlayer1OnAdvantage(): boolean {
    return this.player1Point > this.player2Point && this.player2Point >= 3;
  }

  isPlayer2OnAdvantage(): boolean {
    return this.player2Point > this.player1Point && this.player1Point >= 3;
  }

  isPlayer1Win(): boolean {
    return (
      this.player1Point >= 4 && this.player2Point >= 0 && this.player1Point - this.player2Point >= 2
    );
  }

  isPlayer2Win(): boolean {
    return (
      this.player2Point >= 4 && this.player1Point >= 0 && this.player2Point - this.player1Point >= 2
    );
  }

  getScore(): string {
    this.getScoreIfEqual();
    this.getScoreIfOnlyOnePlayer();
    this.getScoreIfDiffBeforeDeuce();
    this.getScoreIfOnAdvantage();
    this.getScoreIfPlayerWin();
    return this.score;
  }

  getScoreIfEqual(): void {
    if (this.isEqualNBeforeDeuce()) {
      this.score = this.TITLE_EQUAL[this.player1Point];
    }
    if (this.isDeuce()) {
      this.score = 'Deuce';
    }
  }

  getScoreIfOnlyOnePlayer(): void {
    if (this.isOnlyPlayer1()) {
      this.player1Res = this.TITLES[this.player1Point];
      this.player2Res = 'Love';
      this.score = this.player1Res + '-' + this.player2Res;
    }
    if (this.isOnlyPlayer2()) {
      this.player2Res = this.TITLES[this.player2Point];
      this.player1Res = 'Love';
      this.score = this.player1Res + '-' + this.player2Res;
    }
  }

  getScoreIfDiffBeforeDeuce(): void {
    if (this.isPlayer1BetterNBeforeDeuce()) {
      if ([2, 3].includes(this.player1Point)) {
        this.player1Res = this.TITLES[this.player1Point];
      }
      if ([1, 2].includes(this.player2Point)) {
        this.player2Res = this.TITLES[this.player2Point];
      }
      this.score = this.player1Res + '-' + this.player2Res;
    }
    if (this.isPlayer2BetterNBeforeDeuce()) {
      if ([2, 3].includes(this.player2Point)) {
        this.player2Res = this.TITLES[this.player2Point];
      }
      if ([1, 2].includes(this.player1Point)) {
        this.player1Res = this.TITLES[this.player1Point];
      }
      this.score = this.player1Res + '-' + this.player2Res;
    }
  }

  getScoreIfOnAdvantage(): void {
    if (this.isPlayer1OnAdvantage()) {
      this.score = 'Advantage player1';
    }
    if (this.isPlayer2OnAdvantage()) {
      this.score = 'Advantage player2';
    }
  }

  getScoreIfPlayerWin(): void {
    if (this.isPlayer1Win()) {
      this.score = 'Win for player1';
    }
    if (this.isPlayer2Win()) {
      this.score = 'Win for player2';
    }
  }

  SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P1Score();
    }
  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  P1Score(): void {
    this.player1Point++;
  }

  P2Score(): void {
    this.player2Point++;
  }

  wonPoint(player: string): void {
    if (player === 'player1') this.P1Score();
    else this.P2Score();
  }
}
