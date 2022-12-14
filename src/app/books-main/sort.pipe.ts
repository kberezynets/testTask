import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../shared/interfaces/book/book.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrBooks: IBook[], sort: string, type: boolean): IBook[] {
    if (!arrBooks) return [];
    if (type) {
      if (sort === 'title') {
        return arrBooks.sort((a, b) => a.title > b.title ? 1 : ((a.title < b.title) ? -1 : 0));
      }
      else if (sort === 'publishDate'){
        return arrBooks.sort((a, b) => a.publishDate > b.publishDate ? 1 : ((a.publishDate < b.publishDate) ? -1 : 0));
      }
      else if (sort === 'pageCount'){
        return arrBooks.sort((a, b) => a.pageCount > b.pageCount ? 1 : ((a.pageCount < b.pageCount) ? -1 : 0));
      }
      return arrBooks;
    }
    else {
      if (sort === 'title') {
        return arrBooks.sort((a, b) => a.title < b.title ? -1 : ((a.title > b.title) ? -1 : 0));
      }
      else if (sort === 'publishDate'){
        return arrBooks.sort((a, b) => a.publishDate < b.publishDate ? -1 : ((a.publishDate > b.publishDate) ? -1 : 0));
      }
      else if (sort === 'pageCount'){
        return arrBooks.sort((a, b) => a.pageCount < b.pageCount ? -1 : ((a.pageCount > b.pageCount) ? -1 : 0));
      }
      return arrBooks;
    }
  }
}