import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IBook} from '../../interfaces/book/book.interface';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private url = environment.BACKEND_URL;

  constructor(private http: HttpClient) { }

  getAll(): Observable <IBook> {
    return this.http.get<IBook>(this.url);
  }

  // update(book: IBook, id: number): Observable<IBook>{
  //   return this.http.patch<IBook>(`${this.url}/${id}`, book);
  // } 

  // create(book: string): Observable<string> {
  //   return this.http.post<string>(this.url, book);
  // }
}