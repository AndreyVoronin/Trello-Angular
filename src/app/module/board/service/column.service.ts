import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ColumnService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  async addColumn(title: string, boardId: number): Promise<void> {
    await this.post(`columns/${boardId}`, { title });
  }

  async deleteColumn(columnId): Promise<any> {
    const deletedCard = await this.delete(`columns/${columnId}`);
    return deletedCard;
  }
}
