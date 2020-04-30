import { newE2EPage } from '@stencil/core/testing';

describe('ion-phaser', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ion-phaser></ion-phaser>');
    const element = await page.find('ion-phaser');
    expect(element).toHaveClass('hydrated');
  });
});
