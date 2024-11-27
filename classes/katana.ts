import { injectable } from 'inversify';
import { iocContainer } from '../ioc-container';

@injectable()
export class Katana {
  public hit() {
    return 'Katana: hit';
  }
}

iocContainer.bind(Katana).toSelf();
