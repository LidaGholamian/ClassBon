import { extend } from "colord";

interface Problem {
    title: string;
    status: number;
    detail?: string;
    errors?: Record<string, string[]>
}

interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ValidationErrors extends Problem {}
interface NotFoundErrors extends Problem {}
interface UnhandledException extends Problem {}
interface NetworkError extends Problem {}

type ApiError = BadRequestError | NetworkError | NotFoundErrors | UnauthorizedError | UnhandledException | ValidationErrors


export type {Problem, BadRequestError, UnauthorizedError,ValidationErrors, NotFoundErrors, UnhandledException, NetworkError, ApiError}