import { newSpecPage } from '@stencil/core/testing';
import { EsGame } from '../es-game';

describe('es-game', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EsGame],
      html: `<es-game></es-game>`,
    });
    expect(page.root).toEqualHtml(`
      <es-game>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </es-game>
    `);
  });
});
