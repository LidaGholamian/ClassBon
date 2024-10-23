import { ApiError, BadRequestError, NetworkError, NotFoundErrors, UnauthorizedError, UnhandledException, ValidationErrors } from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData
    } as BadRequestError;
}

export const validationErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData
    } as ValidationErrors;
}

export const notFoundErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
        detail: "سرویس مو.رد نظر یافت نشد",
    } as NotFoundErrors;
}

export const unauthorizedErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
        detail: "دسترسی به سرویس مورد نظر امکان پذیر نمی باشد",
    } as UnauthorizedError;
}

export const unhandledExceptionStrategy : ApiErrorHandler = errorData => {
    throw {
        ...errorData,
        detail: "خطای سرور",
    } as UnhandledException;
}

export const networkErrorStrategy = () => {
    throw { detail: "خطای شبکه" } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
    400: (errorData) => (errorData.errors? validationErrorStrategy : badRequestErrorStrategy)(errorData),
    403: unauthorizedErrorStrategy,
    404: notFoundErrorStrategy,
    500: unhandledExceptionStrategy
}