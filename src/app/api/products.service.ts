import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { environment } from "@envsenvironment.development";

@Injectable({providedIn: 'root'})
export class ProductsService {
    public products = signal<any[]>([]);
    private readonly _http = inject(HttpClient);
    private readonly _endPoint = environment.apiURL;

    public getProducts(): void {
        this._http.get<any[]>(`${this._endPoint}`);
    }

}