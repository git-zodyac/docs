import { Pipe, PipeTransform } from '@angular/core';

const LOREM = [
  5, 5, 5, 3, 4, 11, 11, 42, 8, 5, 8, 9, 10, 4, 4, 4, 2, 7, 5, 7, 1, 7, 7, 5,
  13, 3, 11, 7, 10, 5, 5, 5, 5, 5, 5, 5, 5, 3, 4, 11, 11, 42, 8, 5, 8, 9, 10, 4,
];

@Pipe({
  name: 'placeholder',
  standalone: true,
})
export class PlaceholderPipe implements PipeTransform {
  transform(value: number): string {
    const lorem = LOREM.slice(0, value);
    return lorem
      .map((len) =>
        new Array(len)
          .fill(0)
          .map(() => 'a')
          .join(''),
      )
      .join(' ');
  }
}
