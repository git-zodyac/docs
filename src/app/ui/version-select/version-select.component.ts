import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { VersionService, APIVersion } from '../../access/version.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'version-select',
  templateUrl: './version-select.component.html',
  styleUrl: './version-select.component.scss',
  imports: [MatSelectModule, TranslocoModule],
})
export class VersionSelect {
  versions = APIVersion;

  constructor(public _version: VersionService) {}
}
