import 'reflect-metadata';
import { injectable } from 'inversify';
import { iocContainer } from './ioc-container';
import { IWarrior } from './interfaces/warrior';
import { Katana } from './classes/katana';
import { Shuriken } from './classes/shuriken';

@injectable()
export class Ninja implements IWarrior {
  constructor(private katana: Katana, private shuriken: Shuriken) {}

  fight(): string {
    return this.katana.hit();
  }

  sneak(): string {
    return this.shuriken.throw();
  }
}

iocContainer.bind(Ninja).toSelf();
