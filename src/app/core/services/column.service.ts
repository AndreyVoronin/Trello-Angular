import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ColumnService extends ApiService{

constructor(http: HttpClient) {
  super(http);
 }

async addColumn(title: string, boardId: number): Promise<void> {
  await this.post(`columns/${boardId}`, { title });
}

// async updateCard(cardId, newCardName) {
//   const updatedCard = await this.setData({
//     url: `tasks/${cardId}`,
//     data: { task: newCardName },
//     methodType: 'PUT',
//   });
//   return updatedCard;
// }

async deleteColumn(columnId): Promise<any> {
  const deletedCard = await this.delete(`columns/${columnId}`);
  return deletedCard;
}

// async addOrDeleteUserInCard(cardId, userId) {
//   const addedOrDeletedUser = await this.setData({
//     url: `tasks/${cardId}`,
//     data: { userId },
//     methodType: 'PATCH',
//   });
//   return addedOrDeletedUser;
// }
}
