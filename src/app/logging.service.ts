export class LoggingService {
  logStatusChange(status: string) {
    console.log('Event detected: ' + status);
  }
}
