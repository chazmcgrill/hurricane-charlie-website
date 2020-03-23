import { FluidObject } from "gatsby-image";

type FlattenedReturn = { [key: string]: FluidObject };

interface GatsbyFluidReturn extends FluidObject {
    originalName: string;
}

interface GatsbyImageNode {
    childImageSharp: {
        fluid: GatsbyFluidReturn;
    };
}

export const imageObjectFromArray = (imageNodes: GatsbyImageNode[]) => imageNodes.reduce((acc: FlattenedReturn, cur: GatsbyImageNode) => {
    const { originalName, ...rest } = cur.childImageSharp.fluid;
    return { [originalName]: rest, ...acc };
}, {});