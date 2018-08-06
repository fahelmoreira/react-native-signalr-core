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

    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    public send = (methodName: string, ...args: any[]): Promise<void> => {
        return this.hubConnection.send(methodName, args)
    }

    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    public invoke<T = any> (methodName: string, ...args: any[]): Promise<T>  {
        return this.hubConnection.invoke(methodName, args);
    }

    /** Removes all handlers for the specified hub method.
     *
     * @param {string} methodName The name of the method to remove handlers for.
     */
    public off (methodName:string) {
        return new Promise((resolve, reject) => {
            this.hubConnection.off(methodName, resolve)
        })
    }
}

var v = new RNSignalR("av");


