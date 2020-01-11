/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IQuery {
  abstract userlist(limit?: number, offset?: number): User[] | Promise<User[]>;
}

export class User {
  id?: string;
  username?: string;
}
