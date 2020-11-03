import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService, DialogService } from '@core/services';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ColumnService } from '@core/services/column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  id: number;
  board: any;
  columns: [];
  titleValue = ''; 

  constructor(
    private activateRoute: ActivatedRoute,
    private boardService: BoardService,
    private columnService: ColumnService,
    private dialogService: DialogService,
  ) {
    this.id = activateRoute.snapshot.params['boardId'];
  }

  ngOnInit() {
    this.board = this.getBoardById(this.id);   
  }

  private async getBoardById(boardId): Promise<void> {
    this.board = await this.boardService.sendBoardRequest(boardId);
    this.columns = this.board.columns;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  async deleteColumn(columnId: string): Promise<void> {
    await this.columnService.deleteColumn(columnId);
    this.getBoardById(this.id);
  }

  async addColumn(title: string): Promise<void> {
    await this.columnService.addColumn(title, this.id);
    this.titleValue = '';
    this.getBoardById(this.id);
  }

   async openTasksDialog(column): Promise<void> {
    this.dialogService.openDialog({
      data: column
    });
  }
}
