import { render } from '@testing-library/react';
import { PersonaAvatar } from './PersonaAvatar';

describe('Persona Avatar', () => {
  test('renders Persona Avatar', async () => {
    render(
      <PersonaAvatar>
        <>test heading</>
      </PersonaAvatar>
    );
  });
});
