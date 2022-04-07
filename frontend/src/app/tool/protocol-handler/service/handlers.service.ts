import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProtocolHandler } from "../domain/protocol-handler";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HandlersProviderService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    public getHandlers(): Observable<ProtocolHandler[]> {
        return this._httpClient.get<ProtocolHandler[]>("assets/handlers.json");
    }
}