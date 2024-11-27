import { injectable } from 'inversify';
import { iocContainer } from '../ioc-container';

@injectable()
export class Shuriken {
  public throw() {
    return 'Shuriken: throw';
  }
}

iocContainer.bind(Shuriken).toSelf();
