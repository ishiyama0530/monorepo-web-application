/* tslint:disable */
/* eslint-disable */
/**
 * SIMPLE TICKET SYSTEM API
 * specification file: /api/openapi.yaml
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Error4xx
 */
export interface Error4xx {
    /**
     * 
     * @type {string}
     * @memberof Error4xx
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface Error5xx
 */
export interface Error5xx {
    /**
     * 
     * @type {string}
     * @memberof Error5xx
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'email': string;
}
/**
 * From T, pick a set of properties whose keys are in the union K
 * @export
 * @interface PickTicketEntityExcludeKeyofTicketEntityTicketId
 */
export interface PickTicketEntityExcludeKeyofTicketEntityTicketId {
    /**
     * 
     * @type {string}
     * @memberof PickTicketEntityExcludeKeyofTicketEntityTicketId
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof PickTicketEntityExcludeKeyofTicketEntityTicketId
     */
    'body': string;
    /**
     * 
     * @type {string}
     * @memberof PickTicketEntityExcludeKeyofTicketEntityTicketId
     */
    'authorUserId': string;
    /**
     * 
     * @type {string}
     * @memberof PickTicketEntityExcludeKeyofTicketEntityTicketId
     */
    'assignedUserId': string;
}
/**
 * From T, pick a set of properties whose keys are in the union K
 * @export
 * @interface PickUserEntityExcludeKeyofUserEntityUserId
 */
export interface PickUserEntityExcludeKeyofUserEntityUserId {
    /**
     * 
     * @type {string}
     * @memberof PickUserEntityExcludeKeyofUserEntityUserId
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof PickUserEntityExcludeKeyofUserEntityUserId
     */
    'name': string;
    /**
     * 
     * @type {UserRole}
     * @memberof PickUserEntityExcludeKeyofUserEntityUserId
     */
    'role': UserRole;
}
/**
 * 
 * @export
 * @interface TicketDto
 */
export interface TicketDto {
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'ticketId': string;
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'body': string;
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'authorUserId': string;
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'assignedUserId': string;
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'authorUserName': string;
    /**
     * 
     * @type {string}
     * @memberof TicketDto
     */
    'assignedUserName': string;
}
/**
 * 
 * @export
 * @interface UserEntity
 */
export interface UserEntity {
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'userId': string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'name': string;
    /**
     * 
     * @type {UserRole}
     * @memberof UserEntity
     */
    'role': UserRole;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const UserRole = {
    Administrator: 'administrator',
    Member: 'member'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];



/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSessionUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/my`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginRequest: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('login', 'loginRequest', loginRequest)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginAdmin: async (loginRequest: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('loginAdmin', 'loginRequest', loginRequest)
            const localVarPath = `/auth/login/admin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findSessionUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findSessionUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginRequest: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginAdmin(loginRequest: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginAdmin(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSessionUser(options?: any): AxiosPromise<UserEntity> {
            return localVarFp.findSessionUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginRequest: LoginRequest, options?: any): AxiosPromise<string> {
            return localVarFp.login(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginAdmin(loginRequest: LoginRequest, options?: any): AxiosPromise<string> {
            return localVarFp.loginAdmin(loginRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public findSessionUser(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).findSessionUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public login(loginRequest: LoginRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).login(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public loginAdmin(loginRequest: LoginRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).loginAdmin(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TicketsApi - axios parameter creator
 * @export
 */
export const TicketsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PickTicketEntityExcludeKeyofTicketEntityTicketId} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTicket: async (body: PickTicketEntityExcludeKeyofTicketEntityTicketId, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createTicket', 'body', body)
            const localVarPath = `/tickets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} ticketId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTicket: async (ticketId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ticketId' is not null or undefined
            assertParamExists('deleteTicket', 'ticketId', ticketId)
            const localVarPath = `/tickets/{ticketId}`
                .replace(`{${"ticketId"}}`, encodeURIComponent(String(ticketId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} ticketId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTicketByTicketId: async (ticketId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ticketId' is not null or undefined
            assertParamExists('findTicketByTicketId', 'ticketId', ticketId)
            const localVarPath = `/tickets/{ticketId}`
                .replace(`{${"ticketId"}}`, encodeURIComponent(String(ticketId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTickets: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tickets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TicketsApi - functional programming interface
 * @export
 */
export const TicketsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TicketsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PickTicketEntityExcludeKeyofTicketEntityTicketId} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTicket(body: PickTicketEntityExcludeKeyofTicketEntityTicketId, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TicketDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTicket(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} ticketId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTicket(ticketId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTicket(ticketId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} ticketId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findTicketByTicketId(ticketId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TicketDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findTicketByTicketId(ticketId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findTickets(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TicketDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findTickets(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TicketsApi - factory interface
 * @export
 */
export const TicketsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TicketsApiFp(configuration)
    return {
        /**
         * 
         * @param {PickTicketEntityExcludeKeyofTicketEntityTicketId} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTicket(body: PickTicketEntityExcludeKeyofTicketEntityTicketId, options?: any): AxiosPromise<TicketDto> {
            return localVarFp.createTicket(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} ticketId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTicket(ticketId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTicket(ticketId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} ticketId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTicketByTicketId(ticketId: string, options?: any): AxiosPromise<TicketDto> {
            return localVarFp.findTicketByTicketId(ticketId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTickets(options?: any): AxiosPromise<Array<TicketDto>> {
            return localVarFp.findTickets(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TicketsApi - object-oriented interface
 * @export
 * @class TicketsApi
 * @extends {BaseAPI}
 */
export class TicketsApi extends BaseAPI {
    /**
     * 
     * @param {PickTicketEntityExcludeKeyofTicketEntityTicketId} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TicketsApi
     */
    public createTicket(body: PickTicketEntityExcludeKeyofTicketEntityTicketId, options?: AxiosRequestConfig) {
        return TicketsApiFp(this.configuration).createTicket(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} ticketId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TicketsApi
     */
    public deleteTicket(ticketId: string, options?: AxiosRequestConfig) {
        return TicketsApiFp(this.configuration).deleteTicket(ticketId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} ticketId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TicketsApi
     */
    public findTicketByTicketId(ticketId: string, options?: AxiosRequestConfig) {
        return TicketsApiFp(this.configuration).findTicketByTicketId(ticketId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TicketsApi
     */
    public findTickets(options?: AxiosRequestConfig) {
        return TicketsApiFp(this.configuration).findTickets(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PickUserEntityExcludeKeyofUserEntityUserId} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (body: PickUserEntityExcludeKeyofUserEntityUserId, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createUser', 'body', body)
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findUserByUserId: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('findUserByUserId', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PickUserEntityExcludeKeyofUserEntityUserId} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(body: PickUserEntityExcludeKeyofUserEntityUserId, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findUserByUserId(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findUserByUserId(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @param {PickUserEntityExcludeKeyofUserEntityUserId} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(body: PickUserEntityExcludeKeyofUserEntityUserId, options?: any): AxiosPromise<UserEntity> {
            return localVarFp.createUser(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findUserByUserId(userId: string, options?: any): AxiosPromise<UserEntity> {
            return localVarFp.findUserByUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findUsers(options?: any): AxiosPromise<Array<UserEntity>> {
            return localVarFp.findUsers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @param {PickUserEntityExcludeKeyofUserEntityUserId} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public createUser(body: PickUserEntityExcludeKeyofUserEntityUserId, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).createUser(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUser(userId: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public findUserByUserId(userId: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).findUserByUserId(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public findUsers(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).findUsers(options).then((request) => request(this.axios, this.basePath));
    }
}


