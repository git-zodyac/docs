import { Injectable, effect, signal } from '@angular/core';

export const APIVersion = ['v1', 'v2'] as const;
export type APIVersion = (typeof APIVersion)[number];

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public readonly version = signal<APIVersion>(
    (localStorage.getItem('version') as APIVersion) ?? 'v1',
  );

  constructor() {
    effect(() => {
      const version = this.version();
      localStorage.setItem('version', version);
    });
  }

  public set(version: APIVersion) {
    return this.version.set(version);
  }
}
