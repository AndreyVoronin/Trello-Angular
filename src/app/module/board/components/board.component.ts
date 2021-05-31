import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '@core/services';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ColumnService } from '../service/column.service';
import { Board, Dialog } from '@core/models';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Column } from '@core/models/column.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board$: Observable<Board>;
  id: number;
  board: Board;
  titleValue = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private columnService: ColumnService,
    private dialogService: DialogService,
    private router: Router
  ) {
    this.id = this.activateRoute.snapshot.params['boardId'];      
    this.getBoard(this.id);
  }

  ngOnInit(): void {  
    this.board$ = this.columnService.board$;
    this.board$.subscribe(board => this.board = board)
  }

  private getBoard(boardId): void {
    this.columnService.sendBoardRequest(boardId);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  async deleteColumn(columnId: string): Promise<void> {
    await this.columnService.deleteColumn(columnId);
    this.getBoard(this.id);
  }

  async addColumn(title: string): Promise<void> {
    await this.columnService.addColumn(title, this.id);
    this.titleValue = '';
    this.getBoard(this.id);
  }

  openTasksDialog(column: Column): void {
    this.dialogService.openDialog({
      data: {...column, type: Dialog.CardDialogComponent}      
    });
  }

  openColumnDialog(column: Column) {
    column.description = column.description || ''; 
    const dialogRef = this.dialogService.openDialog({
      data: {...column, type: Dialog.ColumnDialogComponent}      
    })

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      column.title = result.title;
      column.description = result.description;
      this.columnService.updateColumnTitle(column.title, column._id )
    });
  }
}
