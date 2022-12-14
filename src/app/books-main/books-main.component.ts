import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/shared/services/books/books.service';
import { IBook } from '../shared/interfaces/book/book.interface';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.scss']
})
export class BooksMainComponent implements OnInit {

  public booksData!: any;

  public bookForm!: FormGroup;
  public openModal = false;
  public searchBookName = '';

  // Variables for sorting
  public asc!: boolean;
  public sortColumn = '';
  public myArrow = '';
  public showArrow = false;

  public fileName = 'ExcelBooks.xlsx';

  public editStatus = false;
  public currentBookIndex!: number;
  public rowId!: number;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.initActionForm();
    this.loadBooks();
  }

  loadBooks(): void {
    this.booksService.getAll().subscribe(data => {
      this.booksData = data;
    });
  }

  initActionForm(): void {
    this.bookForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      pageCount: [null, Validators.required],
      excerpt: [null],
      publishDate: [null, Validators.required]
    });
  }

  exportExcel(): void {
    let element = document.getElementById('export');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  addBook(): void {
    this.openModal = !this.openModal;
    this.bookForm.reset();
  }

  closeModal(): void {
    this.openModal = !this.openModal;
  }

  saveBook(): void {
    if (this.editStatus) {
      // this.actionService.update(this.actionForm.value, this.currentActionIndex).subscribe (() => {
      //   this.loadActions();
      // })
      console.log(this.bookForm.value, this.currentBookIndex)
    } else {
      // this.booksService.create(this.bookForm.value).subscribe(() => {
      //   this.loadBooks();
      // })
      console.log(this.bookForm.value);
    }
    this.bookForm.reset();
    this.editStatus = false;
    this.openModal = !this.openModal;
  }

  changeSort($event: any): void {
    this.asc !== true ? this.asc = true : this.asc = false;
    this.asc !== true ? this.myArrow = "&#9660" : this.myArrow = "&#9650";
    this.sortColumn = ($event.target as Element).id;
    if (!this.showArrow) this.showArrow = true;
  }

  chooseBook(i: number): void {
    if (i == this.rowId){
      this.clearSelection();
    } 
    else {
      this.rowId = i;
    }
  }

  clearSelection(): void {
    this.rowId = -1;
  }

  editBook(book: IBook): void {
    this.openModal = !this.openModal;
    this.bookForm.patchValue({
      title: book.title,
      description: book.description,
      pageCount: book.pageCount,
      excerpt: book.excerpt,
      publishDate: book.publishDate
    })
    this.currentBookIndex = book.id;
    this.editStatus = true;
  }

}