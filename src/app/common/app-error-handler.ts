import { ErrorHandler } from '@angular/core';
/// GLOBAL ERROR HANDLER!!
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occoured.');
        console.log(error);
    }
}
