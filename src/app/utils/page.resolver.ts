import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DocsService } from '../access/docs.service';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageResolver {
  constructor(
    private router: Router,
    private _docs: DocsService,
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const page = route.paramMap.get('page');
    if (!page) return this.router.createUrlTree(['/']);

    return this._docs.getDocs(page).pipe(
      catchError((err) => {
        this.router.navigate(['/404']);
        return throwError(() => err);
      }),
    );
  }
}
