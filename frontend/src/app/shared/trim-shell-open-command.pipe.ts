import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "trimShellOpenCommand" })
export class TrimShellOpenCommandPipe implements PipeTransform {
    public transform(value: any, ...args: any[]) {
        return value.replace("shell\\open\\command", "s.o.c");
    }
}