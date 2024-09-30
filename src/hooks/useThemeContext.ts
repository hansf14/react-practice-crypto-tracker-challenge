import { Singleton } from "@/utils/singleton";
import React, { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";

export type Theme = DefaultTheme | null;

let isInitialized = false;
let currentTheme: Theme = null;

class ThemeContext extends Singleton {
	protected constructor() {
		super();
	}

	private static _staticUseState = (() => {
		let state: Theme = null;
		let setStateCallbacks: React.Dispatch<
			React.SetStateAction<DefaultTheme>
		>[] = []; // Array to hold callbacks to update state

		return (initialValue: DefaultTheme) => {
			if (typeof state === "undefined") {
				state = initialValue;
			}

			const setState = (newValue: DefaultTheme) => {
				state = newValue;
				// Call all callbacks to trigger re-renders
				setStateCallbacks.forEach((callback) => callback(newValue));
			};

			// Register the component's setState function
			const [, setCallback] = useState<DefaultTheme>(state!);
			useEffect(() => {
				setStateCallbacks.push(setCallback);
				return () => {
					setStateCallbacks = setStateCallbacks.filter(
						(cb) => cb !== setCallback
					);
				};
			}, []);

			const a = [state, setState] as [
				DefaultTheme,
				React.Dispatch<React.SetStateAction<DefaultTheme>>
			];
			return a;
		};
	})();

	public static useThemeContext = (initialTheme: DefaultTheme) => {
		if (!isInitialized) {
			currentTheme = initialTheme;
			isInitialized = true;
		}

		const [theme, setTheme] = ThemeContext._staticUseState(currentTheme!);
		return {
			theme,
			setTheme,
		};
	};
}

// const singleton = Singleton.instance;
export default ThemeContext.useThemeContext;
