import { HubConnectionBuilder, LogLevel, HttpTransportType } from '../@aspnet/signalr';

/**
 * The method that creates the a hub connection with the signalR back-end
 * @param url The URL to access the signalr back-end hub
 * @param logLevel The level of log information
 */
export const RNHubConnection = (url:string, logLevel:LogLevel = LogLevel.None ) => {
    this.options = { logger: logLevel, transport: HttpTransportType.WebSockets };
    this.hubConnection = new HubConnectionBuilder()
    .withUrl(url, this.options)
    .build();
}