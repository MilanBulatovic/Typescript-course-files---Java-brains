import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserinfo('koushikkothagal', (user: User) => {
    svc.getRepos('koushikkothagal', (repos: Repo[]) => {

        let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCout * -1]);
        let filteredRepos = _.take(sortedRepos, 5)
        user.repos = filteredRepos;
        console.log(user);
    })
});
