import { newE2EPage } from '@stencil/core/testing';

describe('growing-flower', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<growing-flower></growing-flower>');

    const element = await page.find('growing-flower');
    expect(element).toHaveClass('hydrated');
  });
});
