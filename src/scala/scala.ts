import { java } from 'projen';

export interface ScalaOptions extends java.JavaProjectOptions { }

/**
 *
 * @pjid scala
 **/

export class Scala extends java.JavaProject {
  constructor(options: ScalaOptions) {
    super({
      github: false,
      stale: true,
      ...options,
    });
  }
}
