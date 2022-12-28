import { BuildSchemaOptions } from "type-graphql";
import { GqlModuleOptions } from "@nestjs/graphql";
import { FactoryProvider, ModuleMetadata } from "@nestjs/common/interfaces";
import { GraphQLResolveInfo } from "graphql";
export declare type TypeGraphQLFeatureModuleOptions = Pick<BuildSchemaOptions, "orphanedTypes">;
export declare type TypeGraphQLRootModuleOptions = Omit<GqlModuleOptions, "schema" | "autoSchemaFile" | "buildSchemaOptions"> & Omit<BuildSchemaOptions, "resolvers" | "orphanedTypes" | "container">;
export interface TypeGraphQLRootModuleAsyncOptions extends Pick<ModuleMetadata, "imports">, Pick<FactoryProvider<Promise<TypeGraphQLRootModuleOptions> | TypeGraphQLRootModuleOptions>, "inject" | "useFactory"> {
}
export declare type ResolveReferenceFn = (root: any, context: any, info: GraphQLResolveInfo) => any;
export declare type TypeGraphQLFeatureFedarationModuleOptions = TypeGraphQLFeatureModuleOptions & {
    referenceResolvers?: Record<string, {
        __resolveReference: ResolveReferenceFn;
    }>;
};
export declare type TypeGraphQLRootFederationModuleOptions = TypeGraphQLRootModuleOptions;
export declare type TypeGraphQLRootFederationModuleAsyncOptions = TypeGraphQLRootModuleAsyncOptions;
