import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '@core/models';
import { Subject } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ColumnService extends ApiService {  
  private _board$ = new Subject<Board>();

  public readonly board$ = this._board$.asObservable();

  constructor(http: HttpClient) {
    super(http);
  }

  async sendBoardRequest(boardId): Promise<void> {
    const board = await this.get<Board>(`boards/${boardId}`);
    this._board$.next(board);
  }

  async addColumn(title: string, boardId: number): Promise<void> {
    await this.post(`columns/${boardId}`, { title });
  }

  async deleteColumn(columnId): Promise<any> {
    const deletedCard = await this.delete(`columns/${columnId}`);
    return deletedCard;
  }

  async updateColumnTitle(title: string, columnId: number): Promise<void> {
    await this.put(`columns/${columnId}`, { title });
  }
}
