/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe("coucou",
  () => {
    it('renders correctly', () => {
      renderer.create(<App />);
    })
    it('should render title', () => {
      render(<App />);
      expect(screen.getByText(/Home/)).toBeTruthy();

    }
    )
  }
)
describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    render(<App />);
    const header = await screen.findByText('Home Screen');
    expect(header).toBeTruthy();
  });

  test('clicking on one item takes you to the details screen', async () => {
    render(<App />);
    const toClick = await screen.findByText('Go to Details');
    fireEvent(toClick, 'press');
    const newHeader = await screen.findByText('Details Screen');
    expect(newHeader).toBeTruthy();
  });
});