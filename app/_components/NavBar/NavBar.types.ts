export namespace NavBarTypes {
  export interface NavBar {
    links: NavBarLinks[];
  }

  export interface NavBarLinks {
    linkText: string;
    linkURL: string;
    isActive?: boolean;
  }
}
