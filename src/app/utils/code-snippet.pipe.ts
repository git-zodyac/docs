import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'snippet',
  standalone: true,
})
export class CodeSnippetPipe implements PipeTransform {
  constructor(private readonly _http: HttpClient) {}

  transform(value: string, folder?: string): Observable<string> {
    const url = folder
      ? `assets/snippets/${folder}/${value}.txt`
      : `assets/snippets/${value}.txt`;

    return this._http.get(url, {
      responseType: 'text',
    });
  }
}
