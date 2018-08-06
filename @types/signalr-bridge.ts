import { HubConnectionBuilder, LogLevel, HttpTransportType, HubConnection } from '../@aspnet/signalr';

export class RNSignalR {

    private hubConnection: HubConnection;
    
    /** Create the connection
     * 
     * @param {string} url The URL to access the signalr back-end hub
     * @param {LogLevel} logLevel The level of log information
     */
    constructor(url:string, logLevel:LogLevel = LogLevel.None) {
        this.hubConnection = this.RNHubConnection(url, logLevel)
    }

    /** The method that creates the a hub connection with the signalR back-end
     * 
     * @param {string} url The URL to access the signalr back-end hub
     * @param {LogLevel} logLevel The level of log information
     */
    private RNHubConnection = (url:string, logLevel:LogLevel ) => {
        const options = { logger: logLevel, transport: HttpTransportType.WebSockets };
        return new HubConnectionBuilder()
        .withUrl(url, options)
        .build();
    }
    
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    public onClose = (callback) => {
        this.hubConnection.onclose(callback)
    }

    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     */
    public on = (methodName: string) => {
        return new Promise((resolve, reject) => {
            this.hubConnection.on(methodName, resolve)
        });
    }
}

var v = new RNSignalR("av");

