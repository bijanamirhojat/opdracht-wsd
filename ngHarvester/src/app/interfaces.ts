export interface Aggregate {
    persondata:User,
    repos:Repo[], 
}

export interface User {
    avatar: string;
    repoCount: string;
    name: string;
    username: string;
}

export interface Repo {
    repoName: string;
    programmingLanguage: string;
    description: string;
    stars?: string;
    forks?: string;
}