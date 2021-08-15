import { newSpecPage } from '@stencil/core/testing';
import { CountDown } from '../count-down';

describe('count-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CountDown],
      html: `<count-down></count-down>`,
    });
    expect(page.root).toEqualHtml(`
      <count-down>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </count-down>
    `);
  });
});
