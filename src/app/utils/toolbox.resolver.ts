import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DocsService } from '../access/docs.service';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToolboxResolver {
  constructor(
    private router: Router,
    private _docs: DocsService,
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const page = route.paramMap.get('page');
    if (!page) return this.router.createUrlTree(['/']);

    return this._docs.getToolDocs(page).pipe(
      catchError((err) => {
        this.router.navigate(['/']);
        return throwError(() => err);
      }),
    );
  }
}
