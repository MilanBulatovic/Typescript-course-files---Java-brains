export class Repo {
    name: string;
    desc: string;
    url: string;
    size: number;
    forkCout: number;

    constructor(repo: any) {
        this.name = repo.name;
        this.desc = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCout = repo.forks;
    }
}