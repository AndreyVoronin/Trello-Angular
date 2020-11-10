import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Board } from '@core/models';
import { BoardService, DialogService, NotificationsService } from '@core/services';
import { trackById } from '@core/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  boards$: Observable<Board[]>;
  trackById = trackById;
  errorToShow: string;

  constructor(
    private boardService: BoardService,
    private notificationsService: NotificationsService,
    private dialogService: DialogService,
    private router: Router,
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

  ngOnInit(): void {    
    this.getBoards();
    this.boards$ = this.boardService.boards$;
  }

  private getBoards(): void {
    this.boardService.sendBoardsRequest();
  }

  async deleteBoard(event, boardId: string): Promise<void>{
    event.stopPropagation();
    await this.boardService.deleteBoard(boardId);
    this.getBoards();
  }

  openBoard(boardId: string): void {
    if (!boardId) { return; }
    this.router.navigate([`/boards/${boardId}`]);
  }
}
