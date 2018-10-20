import { Injectable, Input } from "@angular/core";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { User } from "../state/model";

const HttpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get<User>("http://localhost:8080/users");
  }
}
