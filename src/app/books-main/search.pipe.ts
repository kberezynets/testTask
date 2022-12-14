import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../shared/interfaces/book/book.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrBooks: IBook [], searchBook: string): IBook [] {
    if (!arrBooks) return [];
    if (!searchBook) return arrBooks;
    return arrBooks.filter(function (book) {
      return book.title.toLowerCase().includes(searchBook.toLowerCase());
    })
  }

}