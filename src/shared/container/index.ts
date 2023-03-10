import { UsersRepository } from '@app/modules/accounts/infra/typeorm/repositories/users-repositories';
import { UsersRepositoryInterface } from '@app/modules/accounts/repositories/users-repositories-interface';
import { DirectorateRepository } from '@app/modules/directorate/infra/typeorm/repositories/directorate-repositories';
import { DirectorateRepositoryInterface } from '@app/modules/directorate/repositories/directorate-repositories-interface';
import { GeneralDirectorRepository } from '@app/modules/general-director/infra/typeorm/repositories/general-director-repository';
import { GeneralDirectorRepositoryInterface } from '@app/modules/general-director/repositories/general-director-repository-interface';
import { SalesRepository } from '@app/modules/sales/infra/typeorm/repositories/sales-repository';
import { SalesRepositoryInterface } from '@app/modules/sales/repositories/sales-repository-interface';
import { SalespersonRepository } from '@app/modules/salesperson/infra/typeorm/repositories/salesperson-repository';
import { SalespersonRepositoryInterface } from '@app/modules/salesperson/repositories/salesperson-repository-interface';
import { UnitsRepository } from '@app/modules/units/infra/typeorm/repositories/UnitsReposiotry';
import { UnitsRepositoryInterface } from '@app/modules/units/repositories/UnitsRepositoryInterface';
import { container } from 'tsyringe';

container.registerSingleton<DirectorateRepositoryInterface>(
  'DirectorateRepository',
  DirectorateRepository
);

container.registerSingleton<GeneralDirectorRepositoryInterface>(
  'GeneralDirectorRepository',
  GeneralDirectorRepository
);

container.registerSingleton<UsersRepositoryInterface>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<UnitsRepositoryInterface>(
  'UnitsRepository',
  UnitsRepository
);

container.registerSingleton<SalespersonRepositoryInterface>(
  'SalespersonRepository',
  SalespersonRepository
);

container.registerSingleton<SalesRepositoryInterface>(
  'SalesRepository',
  SalesRepository
);
