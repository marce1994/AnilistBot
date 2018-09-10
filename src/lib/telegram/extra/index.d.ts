import { I18n } from 'telegraf-i18n';
import { LocationRequest, ListFilterRequest, ListRequest, LanguageRequest, NotifyRequests, UserRequest, TimeRequest, LocationConfirmRequest } from 'telegraf-bot-typings';

export interface IMediaExtraContext {
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
}

export interface ILocationExtraContext {
    readonly translation: I18n;
    readonly request: LocationRequest;
}

export interface IHandleLanguageExtra {
    readonly translation: I18n;
    readonly value: LanguageRequest;
}

export interface IHandleMediaExtra {
    readonly list: ListRequest;
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
}

export interface IHandleUserExtra {
    readonly translation: I18n;
    readonly request: UserRequest | TimeRequest;
    readonly value: LanguageRequest | NotifyRequests | number;
}

export interface IHandleNotifyExtra {
    readonly translation: I18n;
    readonly value: NotifyRequests;
}

export interface IHandleTimeExtra {
    readonly translation: I18n;
    readonly value: TimeRequest;
    readonly request: UserRequest | TimeRequest;
}

export interface ILocationExtra {
    readonly translation: I18n;
    readonly request: LocationRequest;
    readonly confirm: LocationConfirmRequest;
}