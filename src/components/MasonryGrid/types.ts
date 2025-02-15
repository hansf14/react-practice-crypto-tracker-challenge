import { ExecutionProps } from "styled-components";

///////////////////////////////////////////////////////////////

export type MasonryGridHandle = {
	gridBaseElement: HTMLDivElement | null;
	gridInternalComponentBaseElement: HTMLDivElement | null;
};

///////////////////////////////////////////////////////////////

export const MasonryGridBaseElementTypeValue = "div";
export type MasonryGridBaseElementType = typeof MasonryGridBaseElementTypeValue;
export type MasonryGridBaseElement =
	React.ElementRef<MasonryGridBaseElementType>;
export type MasonryGridRefElement = MasonryGridBaseElement;

export type MasonryGridFoundationProps =
	React.ComponentPropsWithoutRef<MasonryGridBaseElementType> & ExecutionProps;

export interface MasonryGridCustomProps {
	sequential?: boolean;
	columnCnt: number;
	columnGap?: string;
	rowGap?: string;
	forwardGridInternalComponentAs?: ExecutionProps["forwardedAs"];
}

export interface MasonryGridProps extends MasonryGridFoundationProps {
	customProps: MasonryGridCustomProps;
}

///////////////////////////////////////////////////////////////

export const MasonryGridInternalComponentBaseElementTypeValue = "div";
export type MasonryGridInternalComponentBaseElementType =
	typeof MasonryGridInternalComponentBaseElementTypeValue;

export type MasonryGridInternalComponentFoundationProps =
	React.ComponentPropsWithoutRef<MasonryGridInternalComponentBaseElementType> &
		ExecutionProps;

export interface MasonryGridInternalComponentCustomProps {
	columnCnt: number;
	columnGap: string;
	rowGap: string;
}

export interface MasonryGridInternalComponentProps
	extends MasonryGridInternalComponentFoundationProps {
	customProps: MasonryGridInternalComponentCustomProps;
}

///////////////////////////////////////////////////////////////

export const MasonryGridColumnSeparatorBaseElementTypeValue = "div";
export type MasonryGridColumnSeparatorBaseElementType =
	typeof MasonryGridColumnSeparatorBaseElementTypeValue;
export type MasonryGridColumnSeparatorBaseElement =
	React.ElementRef<MasonryGridColumnSeparatorBaseElementType>;
export type MasonryGridColumnSeparatorRefElement =
	MasonryGridColumnSeparatorBaseElement;

export type MasonryGridColumnSeparatorFoundationProps =
	React.ComponentPropsWithoutRef<MasonryGridColumnSeparatorBaseElementType> &
		ExecutionProps;

export interface MasonryGridColumnSeparatorCustomProps {
	isNeeded: boolean;
}
export interface MasonryGridColumnSeparatorProps
	extends MasonryGridColumnSeparatorFoundationProps {
	customProps: MasonryGridColumnSeparatorCustomProps;
}

///////////////////////////////////////////////////////////////

export const MasonryGridItemBaseElementTypeValue = "div";
export type MasonryGridItemBaseElementType =
	typeof MasonryGridItemBaseElementTypeValue;
export type MasonryGridItemBaseElement =
	React.ElementRef<MasonryGridItemBaseElementType>;
export type MasonryGridItemRefElement = MasonryGridItemBaseElement;

export type MasonryGridItemFoundationProps =
	React.ComponentPropsWithoutRef<MasonryGridItemBaseElementType> &
		ExecutionProps;

export interface MasonryGridItemProps extends MasonryGridItemFoundationProps {}

///////////////////////////////////////////////////////////////

export const MasonryGridCustomAttributes = {
	dataMasonryGridColumnNumber: "data-masonry-grid-column-number",
} as const;
