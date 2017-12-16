import {Pipe, PipeTransform} from '@angular/core';
import filesize from 'filesize';

@Pipe({
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
    transform(value: number | number[], options: any) {
        if (Array.isArray(value)) {
            return value.map(val => FileSizePipe.transformOne(val, options));
        }

        return FileSizePipe.transformOne(value, options);
    }

    private static transformOne(value: number, options): string {
        return filesize(value, options);
    }
}