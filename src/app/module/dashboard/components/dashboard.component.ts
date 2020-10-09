import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Board } from '@core/models';
import { BoardService, DialogService, NotificationsService } from '@core/services';
import { trackById } from '@core/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  boards$: Observable<Board[]>;
  trackById = trackById;
  errorToShow: string;
  public board: any;

  constructor(
    private boardService: BoardService,
    private notificationsService: NotificationsService,
    private dialogService: DialogService,
  ) {
  }

  async addBoard(boardTitle: string): Promise<void> {
    await this.boardService.addBoard(boardTitle);
    this.getBoards();
  }

  async handleBoardDelete(boardId: string): Promise<void> {
    try {
      await this.boardService.deleteBoard(boardId);
      this.getBoards();
    }
    catch (error) {
      this.errorToShow = error.message;
      this.notificationsService.openSnackBar(this.errorToShow, 'close');
    }
  }

  // openDialog(boardId: string): void {
  //   this.dialogService.openDialog({
  //     onConfirm: () => this.handleBoardDelete(boardId)
  //   });
  // }

  async openBoardDialog(boardId: string): Promise<void> {
    await this.getBoardById(boardId);
    this.dialogService.openDialog({
      data: this.board
    });
  }

  ngOnInit(): void {    
    this.getBoards();
    this.boards$ = this.boardService.boards$;
  }

  private getBoards(): void {
    this.boardService.sendBoardsRequest();
  }

  private getBoardById(boardId): Promise<void> {
    return this.boardService.sendBoardRequest(boardId).then(board => {
      this.board = board;
    });
  }
}
