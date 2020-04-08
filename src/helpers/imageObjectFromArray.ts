import { FluidObject, FixedObject } from "gatsby-image";

type FlattenedFluidReturn = { [key: string]: FluidObject };

type FlattenedFixedReturn = { [key: string]: FixedObject };

interface GatsbyFluidReturn extends FluidObject {
    originalName: string;
}
interface GatsbyFixedReturn extends FixedObject {
    originalName: string;
}

export interface GatsbyFluidImageNode {
    childImageSharp: {
        fluid: GatsbyFluidReturn;
    };
}

export interface GatsbyFixedImageNode {
    childImageSharp: {
        fixed: GatsbyFixedReturn;
    };
}

export const fluidImageObjectFromArray = (imageNodes: GatsbyFluidImageNode[]): FlattenedFluidReturn => 
    imageNodes.reduce((acc: FlattenedFluidReturn, cur: GatsbyFluidImageNode) => {
        const { originalName, ...rest } = cur.childImageSharp.fluid;
        return { [originalName]: rest, ...acc };
    }, {});

export const fixedImageObjectFromArray = (imageNodes: GatsbyFixedImageNode[]): FlattenedFixedReturn => 
    imageNodes.reduce((acc: FlattenedFixedReturn, cur: GatsbyFixedImageNode) => {
        const { originalName, ...rest } = cur.childImageSharp.fixed;
        return { [originalName]: rest, ...acc };
    }, {});