export class GithubRepo {
  name: string;
  owner: string;

  constructor(name: string, owner: string) {
    this.name = name;
    this.owner = owner;
  }

  toString = (): string => {
    return `${this.name.charAt(0).toUpperCase() + this.name.slice(1)} - by ${
      this.owner
    }`;
  };
}
