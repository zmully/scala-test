import { java } from 'projen';

export interface ScalaOptions extends java.JavaProjectOptions { }

/**
 *
 * @pjid zaiScala
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
