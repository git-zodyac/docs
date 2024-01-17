import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(
    private http: HttpClient,
    private transloco: TranslocoService,
  ) {}

  getDocs(page: string): Observable<{
    title: string;
    content: string;
  }> {
    const lang = this.transloco.getActiveLang();
    return this.http
      .get(`/articles/${lang}/${page}.md`, { responseType: 'text' })
      .pipe(
        map((res) => {
          if (!res.startsWith('#')) throw new Error('Invalid markdown file');
          return {
            title: parseName(res),
            content: parseContent(res),
          };
        }),
      );
  }

  getToolDocs(page: string): Observable<{
    title: string;
    content: string;
  }> {
    const lang = this.transloco.getActiveLang();
    return this.http
      .get(`/articles/${lang}/toolbox/${page}.md`, { responseType: 'text' })
      .pipe(
        map((res) => {
          if (!res.startsWith('#')) throw new Error('Invalid markdown file');
          return {
            title: parseName(res),
            content: parseContent(res),
          };
        }),
      );
  }
}

function parseName(doc: string) {
  const name = doc.match(/#\s(.*)/)?.[1];
  if (!name) throw new Error('Invalid markdown file');
  return name;
}

function parseContent(doc: string) {
  return doc
    .replaceAll('[!NOTE]', '🔎&nbsp;&nbsp;')
    .replaceAll('[!TIP]', '💡&nbsp;&nbsp;')
    .replaceAll('[!WARNING]', '❗️&nbsp;&nbsp;')
    .replaceAll('[!IMPORTANT]', '📌&nbsp;&nbsp;')
    .replaceAll('[!CAUTION]', '⚠️&nbsp;&nbsp;');
}
