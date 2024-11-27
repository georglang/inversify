import 'reflect-metadata';
import { injectable } from 'inversify';
import { IWarrior } from './interfaces';
import { iocContainer } from './ioc-container';

@injectable()
export class Katana {
  public hit() {
    return 'Katana: hit';
  }
}

@injectable()
export class Shuriken {
  public throw() {
    return 'Shuriken: throw';
  }
}

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
iocContainer.bind(Katana).toSelf();
iocContainer.bind(Shuriken).toSelf();
