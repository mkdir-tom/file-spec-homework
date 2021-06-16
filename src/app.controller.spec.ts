import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AppUtils from './utils';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('is even number = ture', () => {
      const anime = AppUtils.isEvenNumber(2);
      expect(anime).toEqual(true);
    });

    it('my holiday = true', () => {
      const holiday = AppUtils.isMyHoliday('Friday');
      expect(holiday).toEqual(true);
    });

    it('my holiday = false', () => {
      const holiday = AppUtils.isMyHoliday('Monday');
      expect(holiday).toEqual(false);
    });

    it('Factorial number', () => {
      const num = AppUtils.isFactorial(5);
      expect(num).toEqual(120);
    });

    it('VAT Product = 84000', () => {
      const price = AppUtils.isVAT(1200000);
      expect(price).toEqual(84000);
    });
  });
});
