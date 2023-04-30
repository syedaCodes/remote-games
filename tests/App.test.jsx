import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders vite title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Vite \+ React/i);
    expect(titleElement).toBeInTheDocument();
})