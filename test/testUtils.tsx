import { render } from '@testing-library/react';
import { AppContextProvider } from '@app/contexts/AppContext';

const Providers = ({ children }) => {
	return <AppContextProvider>{children}</AppContextProvider>;
};

const customRender = (ui, options = {}) =>
	render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
