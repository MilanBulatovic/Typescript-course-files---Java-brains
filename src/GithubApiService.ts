import * as request from "request";
import { Repo } from "./Repo";
import { User } from "./User";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}
export class GithubApiService {
    getUserinfo(userName: string, callback: (user: User) => any ){
        request.get(`https://api.github.com/users/${userName}`, OPTIONS, (error: any, response: any, body: any) => {

        let user = new User(body);
        callback(user);
        });
    }
    getRepos(userName: string, callback: (repos: Repo[]) => any ){
        request.get(`https://api.github.com/users/${userName}/repos`, OPTIONS, (error: any, response: any, body: any) => {
            let repos = body.map((repo: any) => new Repo(repo));
            callback(repos);
        });
    }
}