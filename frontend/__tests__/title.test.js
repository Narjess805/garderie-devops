import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Titre Ma Garderie', () => {
  it('affiche le titre dans le Hero', () => {
    render(<Hero slogan="Un cocon" />);
    expect(screen.getByText(/Ma Garderie/i)).toBeInTheDocument();
  });
});
