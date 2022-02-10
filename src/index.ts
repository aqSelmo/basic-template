import { logger } from '@config/logger';
import { Logger } from 'winston';

const main = (): Logger => logger.info('endpoint reached');

main();
